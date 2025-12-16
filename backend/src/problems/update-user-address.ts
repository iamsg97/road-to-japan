/**
 * Problem: update-user-address
 *
 * Description:
 * You have a list of users in state.
 * You want to “update one user’s city” without accidentally mutating the original state (so React/Redux can detect changes properly).
 *
 * Requirements:
 * Is updateUserCityWrong actually “immutable” in the React/Redux sense, or is there a hidden mutation bug?
 * If there is a bug, explain exactly what is being mutated and why this can cause subtle UI bugs in React/Redux.
 * Write a correct version:
 *
 * Examples:
 * TODO: Add examples
 */

type Address = {
  city: string;
  country: string;
};

type User = {
  id: number;
  name: string;
  address: Address;
};

export function solution(users: User[], userId: number, newCity: string) {
  // const copied = structuredClone(users); // shallow copy of array -> now converted to deep copy

  // const user = copied.find((u) => u.id === userId);
  // if (user) {
  //   user.address.city = newCity;
  // }

  // return copied;
  // THE ABOVE SOLUTION IS ALSO CORRECT, BUT PROBABLY A LITTLE OVERKILL
  return users.map((user) => {
    if (user.id !== userId) {
      return user;
    }
    return {
      ...user,
      address: {
        ...user.address,
        city: newCity,
      },
    };
  });
}
