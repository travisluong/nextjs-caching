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
   * request is cached with request memoization
   * request memoization cache lasts for duration of request lifecycle
   * data cache is persistent across incoming requests and deployments
   *
   * observation
   * - only one query is made to external api for both page and post item component. this is due to request memoization.
   * - after initial page visit, no more requests are made to external api. this is due to data cache.
   * - after on-demand revalidation, a request will be made to external api. this is due to the data cache being purged.
   *
   * reference
   * https://nextjs.org/docs/app/building-your-application/caching#request-memoization
   * https://nextjs.org/docs/app/building-your-application/caching#data-cache
   */
  const res = await fetch("http://localhost:3001?query=" + query);
  const json = await res.json();
  return (
    <div>
      <h1 className="text-2xl">dynamic rendering example</h1>
      <p>page: {json.message}</p>
      <PostItem query={query} />
    </div>
  );
}
