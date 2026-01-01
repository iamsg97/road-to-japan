/**
 * Reverses elements of an array in place between the given start and end indices (inclusive).
 *
 * @param {number} start - Start index (inclusive).
 * @param {number} end - End index (inclusive).
 * @param {Array<number>} arr - The array to be modified.
 * @returns {Array<number>} The original array after the specified range has been reversed.
 */
function reverse(start, end, arr) {
	let left = start;
	let right = end;
	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}
	return arr;
}

/**
 *
 * @param {Array<number>} arr
 * @param {number} target
 * @param {'left'|'right'} which
 * @return {Array<number>}
 */
function rotateArray(arr, target, which) {
	// handle target > len
	const len = arr.length;
	if (target > len) {
		target = target % len;
	}
	if (target === 0) {
		return arr;
	}
	// RIGHT ROTATION: first reverse the entire array
	if (which === "right") {
		reverse(0, len - 1, arr);
	} // reverse the first target elements
	reverse(0, target - 1, arr);
	// reverse the remaining elements
	reverse(target, len - 1, arr);
	// for left rotation only
	if (which === "left") {
		reverse(0, len - 1, arr);
	}
	return arr;
}
console.log(rotateArray([1, 2, 3, 4, 5], 2, "left"));

/**
 * Find two distinct elements in an array whose sum equals the target.
 *
 * @param {number[]} arr - Array of numbers to search (zero-based indices).
 * @param {number} target - Target sum to find.
 * @returns {(number[]|null)} A two-element array [i, j] of indices (i !== j) whose values add up to target, or null if no such pair exists.
 * @description - this solution is focused if the given input array is sorted already
 */
function twoSum(arr, target) {
	if (arr.length === 0) {
		return arr;
	}
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		const sum = arr[left] + arr[right];
		if (sum === target) {
			return [arr[left], arr[right]];
		} else if (sum > target) {
			// I need a smaller sum
			right--;
		} else {
			// I need a larger sum
			left++;
		}
	}
	return null;
}

function removeDupFromArray(/** @type {Array<number>}*/ arr) {
	console.log("🚀 ~ removeDupFromArray ~ input_arr:", arr);
	// we will use two pointers approach
	let slow = 0;
	for (let fast = 1; fast < arr.length; fast++) {
		// if arr[slow] == arr[fast] skip
		if (arr[slow] !== arr[fast]) {
			slow++;
			arr[slow] = arr[fast]; // last captured unique element
		}
	}
	return arr.slice(0, slow + 1); // slow contains the number of unique elements seen, but since slow starts from 0 we need to return slow + 1
}

console.log(
	"🚀 ~ removeDupFromArray:",
	removeDupFromArray([1, 1, 2, 2, 3, 3, 4, 4]),
);

function findSecondLargest(/** @type {Array<number>}*/ arr) {
	let max = -Infinity;
	let secondMax = -Infinity;
	for (const element of arr) {
		if (element > max) {
			secondMax = max;
			max = num;
		} else if (element < max && element > secondMax) {
			secondMax = element;
		}
	}
	return secondMax === -Infinity ? -1 : secondMax;
}

function moveZeroesToEnd(/** @type {Array<number>}*/ arr) {
	const len = arr.length;
	if (len === 0) {
		return arr;
	}
	let slow = 0;
	for (let fast = 0; fast < len; fast++) {
		const nonzeroElement = arr[fast];
		if (nonzeroElement !== 0) {
			slow++;
			arr[slow] = nonzeroElement;
		}
	}
	while (slow < len) {
		slow++;
		arr[slow] = 0;
	}
	return arr;
}

function findMissingNumber(arr) {
	const len = arr.length;
	if (len === 0) {
		return arr;
	}
	const expectedSum = len * ((len + 1) / 2);
	// here sum: accumulator
	// here element: value
	// every time you are returning from a reducer, it's always acc = (whatever)
	const actualSum = arr.reduce((sum, element) => {
		return sum + element;
	}, 0); // 0 is the initial value of sum
	return expectedSum - actualSum;
}

function isArrayPalindrome(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		if (arr[left] !== arr[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}

function firstRepeatingElement(arr) {
	const seen = new Set();
	for (const element of arr) {
		if (set.has(element)) {
			// if we have already in set, then we are iterating a dup element, that's our answer baka!
			return num;
		}
		seen.add(element);
	}
	return null; // there is no repeating element
}

function mergeTwoSortedArrays(arr1, arr2) {
	const len1 = arr1.length;
	const len2 = arr2.length;
	const result = [];
	let i = 0,
		j = 0;
	while (i < len1 && j < len2) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	// remaining
	while (i < len1) {
		result.push(arr1[i++]);
	}
	while (j < len2) {
		result.push(arr2[j++]);
	}
}

function arrayLeaders(arr) {
	if (arr.length === 0 || arr.length === 1) {
		return arr;
	}
	let max = -Infinity;
	const result = [];
	for (let i = arr.length; i > 0; i--) {
		if (arr[i] > max) {
			result.push(arr[i]);
			max = arr[i];
		}
	}
	return arr.reverse();
}

/**
 *
 * @param {Array<number>} arr input arr
 * @param {number} target subarray whose sum should be equal to this target
 * @returns {Array<number>}
 */
function subarraySum(arr, target) {
	const len = arr.length;
	let left = 0;
	let windowSum = 0;
	for (let right = 0; right < len; right++) {
		windowSum = windowSum + arr[right];
		while (windowSum > target) {
			windowSum = windowSum - arr[left];
			left++;
		}
		if (windowSum === target) {
			return arr.slice(left, right + 1);
		}
	}
	return null;
}
