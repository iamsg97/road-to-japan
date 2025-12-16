/**
 * Problem: make-parallel
 *
 * Description:
 * TODO: Add problem description here
 *
 * Requirements:
 * The sequential requests are slow. Implement `Promise.all` to make it faster
 *
 * Examples:
 * Below is slow code
 * ```js
 * async function getUser(id) {
    const user = await fetch(`/api/users/${id}`).then(r => r.json());
    const posts = await fetch(`/api/posts/${user.id}`).then(r => r.json());
    const comments = await fetch(`/api/comments?userId=${user.id}`).then(r => r.json());
    return { user, posts, comments };
  }
```
 */

export async function getUserFast(id: string) {
  const user: { id: string; name: string } = await fetch(`/api/users/${id}`).then((r) => r.json());
  const [posts, comments] = await Promise.all([
    fetch(`/api/posts/${user.id}`).then((r) => r.json()),
    fetch(`/api/comments?userId=${user.id}`).then((r) => r.json()),
  ]);
  return { user, posts, comments };
}
