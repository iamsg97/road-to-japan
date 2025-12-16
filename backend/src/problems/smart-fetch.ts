/**
 * Problem: smart-fetch
 *
 * Description:
 * TODO: Add problem description here
 *
 * Requirements:
 * TODO: Add requirements
 *
 * Examples:
 * TODO: Add examples
 */
const SECOND = 1000;
const MAX_LIMIT = 15 * SECOND;

interface InputProp {
	urls: Array<URL>;
	config: FetchConfig;
}

type FetchConfig = {
	timeoutMs: number;
	maxRetries: number;
	concurrency: number;
	signal: AbortSignal;
};

class ServerError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "ServerError";
	}
}

class TimeoutError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "TimeoutError";
	}
}

function retryFetch(url: URL, config: Omit<FetchConfig, "concurrency">) {
	const { maxRetries, timeoutMs, signal } = config;
	async function attempt(count = 0) {
		const controller = new AbortController();
		const timeoutId = setTimeout(
			() => controller.abort(new TimeoutError("Server timed out")),
			timeoutMs,
		);
		if (signal) {
			if (signal.aborted) controller.abort(signal.reason);
			else {
				signal.addEventListener(
					"abort",
					() => {
						controller.abort(signal.reason);
					},
					{ once: true },
				);
			}
		}
		try {
			const response = await fetch(url, { signal: controller.signal });
			if (!response.ok) {
				throw new ServerError(
					`Server responded with HTTP status code: ${response.status}`,
				);
			}
			const data = await response.json();
			return data;
		} catch (error) {
			if (signal.aborted) throw signal.reason ?? error;
			const isAbortError = (error as Error).name === "AbortError";
			const isServerError = error instanceof ServerError;
			console.error("🚀 ~ attempts ~ error:", error);
			if (isAbortError || isServerError) {
				if (count >= maxRetries) {
					throw error;
				}
				const delay = Math.min(2 ** count * SECOND, MAX_LIMIT);
				await new Promise((resolve) => setTimeout(resolve, delay));
				return attempt(count + 1);
			}
			// for all other errors
			throw error;
		} finally {
			clearTimeout(timeoutId);
		}
	}
	return attempt();
}

export async function solution(prop: InputProp) {
	console.log("🚀 ~ solution ~ prop:", prop);
	const { urls, config } = prop;
	const { concurrency, maxRetries, timeoutMs, signal } = config;
	const results: unknown[] = [];
	const executing = new Set<Promise<void>>();
	for (let i = 0; i < urls.length; i++) {
		const url = urls[i];
		const promise = retryFetch(url, { maxRetries, timeoutMs, signal })
			.then((data) => {
				results[i] = data;
			})
			.catch((error) => {
				console.error("🚀 ~ solution ~ error:", error);
				results[i] = { error: (error as Error).message };
			})
			.finally(() => executing.delete(promise));
		executing.add(promise);
		if (executing.size >= concurrency) {
			await Promise.race(executing);
		}
	}
	await Promise.all(executing);
	return results;
}
