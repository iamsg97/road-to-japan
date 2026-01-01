/**
 * Problem: async-add
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

export function solution(values: Array<Promise<number>>) {
	if (values.length === 0) {
		return Promise.resolve(0);
	}
	return new Promise((resolve, reject) => {
		let resolveCount = 0;
		let rejectCount = 0;
		for (const promise of values) {
			let sum = 0;
			promise
				.then((data) => {
					resolveCount++;
					sum += data;
				})
				.catch(() => {
					rejectCount++;
				})
				.finally(() => {
					if (resolveCount + rejectCount === values.length) {
						if (resolveCount > 0) {
							resolve(sum);
						}
						reject(new Error("All promises are rejected"));
					}
				});
		}
	});
}

/**
 *
 * @param values Promise<number>[]
 * @returns Promise<number>
 * @description A more simpler and cleaner than the above approach
 */
export function asyncAddV2(values: Array<Promise<number>>) {
	let successCount = 0;
	let sum = 0;
	return Promise.allSettled(values).then((results) => {
		results.forEach((result) => {
			if (result.status === "fulfilled") {
				sum += result.value;
				successCount++;
			}
		});
		if (successCount > 0) {
			return sum;
		} else {
			throw new Error("All Promises have been rejected");
		}
	});
}
