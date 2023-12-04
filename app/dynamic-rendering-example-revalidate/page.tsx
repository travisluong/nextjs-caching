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
   * Time-based Revalidation: Revalidate data after a certain amount of time has passed and a new request is made. This is useful for data that changes infrequently and freshness is not as critical.
   *
   * observation
   * - when page is visited for the first time, a call to api is made
   * - if another request is made within revalidate time, data is pulled from data cache
   * - if another request is made after revalidate time, an api call is made
   *
   * reference
   * https://nextjs.org/docs/app/building-your-application/caching#time-based-revalidation
   */
  const res = await fetch("http://localhost:3001?query=" + query, {
    next: { revalidate: 5 },
  });

  const json = await res.json();
  return (
    <div>
      <h2 className="text-2xl">dynamic rendering revalidate example</h2>
      <p>{json.message}</p>
      <PostItem query={query} />
    </div>
  );
}
