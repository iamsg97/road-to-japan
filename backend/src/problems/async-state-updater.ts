/**
 * Problem: async-state-updater
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

type UserProfile = {
  id: number;
  name: string;
  email: string;
};

const cache: Record<number, UserProfile> = {};

export function fetchUserProfile(userId: number): Promise<UserProfile> {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` }),
      Math.random() * 500
    )
  );
}

// PROBLEMATIC version with race condition
async function solution(userId: number): Promise<UserProfile> {
  if (cache[userId]) {
    return cache[userId]; // ⚠️ Race condition here!
  }

  // const profile = await fetchUserProfile(userId);
  cache[userId] = fetchUserProfile(userId)
    .then((data) => data)
    .catch((error_) => {
      cache[userId] = null;
      console.error(error_);
    });
  // cache[userId] = profile;
  // return profile;
  return cache[userId];
}

// Possible usages
// These 3 should all resolve with SAME data, only 1 API call made
Promise.all([solution(1), solution(1), solution(1)]).then((results) =>
  console.log(results.length === 3)
); // true
