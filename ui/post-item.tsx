/**
 * λ  (Dynamic)  server-rendered on demand using Node.js
 */
export default async function PostItem({
  query = "",
}: {
  query: string | string[] | undefined;
}) {
  /**
   * request first checks the request memoization cache
   */
  const res = await fetch("http://localhost:3001?query=" + query);
  const json = await res.json();

  return <div>post item: {json.message}</div>;
}
