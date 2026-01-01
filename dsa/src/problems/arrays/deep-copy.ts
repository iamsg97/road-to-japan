/**
 * Problem: Deep Copy
 * Difficulty: Medium
 *
 * create a recursive deep copy function
 */

export function deepCopy<T>(obj: T): T {
	const clonedObj = new Object() as T;
	// handle primitive data types
	if (obj !== null || typeof obj !== "object") {
		return obj;
	}
	// handle array
	if (Array.isArray(obj)) {
		obj.map((ele) => deepCopy(ele));
	}
	// handle date
	if (obj instanceof Date) {
		return new Date(obj.getTime()) as T;
	}
	// create the copy
	for (const key in obj) {
		clonedObj[key] = deepCopy(obj[key]);
	}
	return clonedObj;
}
