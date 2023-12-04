import PostItem from "../../ui/post-item";

/**
 * λ  (Dynamic)  server-rendered on demand using Node.js
 */
export default async function Page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const { query } = searchParams;

  /**
   * For individual data fetches, you can opt out of caching by setting the cache option to no-store. This means data will be fetched whenever fetch is called.
   *
   * observation
   * - every time the page is refreshed, a call to the api is made
   *
   * reference
   * https://nextjs.org/docs/app/building-your-application/caching#opting-out-1
   */
  const res = await fetch("http://localhost:3001?query=" + query, {
    cache: "no-cache",
  });

  const json = await res.json();
  return (
    <div>
      <h2 className="text-2xl">dynamic rendering no cache example</h2>
      <p>{json.message}</p>
      <PostItem query={query} />
    </div>
  );
}
