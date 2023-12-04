/**
 * react cache example
 *
 * The React cache function allows you to memoize the return value of a function, allowing you to call the same function multiple times while only executing it once.
 * Since fetch requests are automatically memoized, you do not need to wrap it in React cache. However, you can use cache to manually memoize data requests for use cases when the fetch API is not suitable. For example, some database clients, CMS clients, or GraphQL clients.
 *
 * observation
 * - when visiting page, see only one call to getDataFromDB is made per request
 * - if the cache is not used, two calls are made per request
 *
 * reference
 * https://nextjs.org/docs/app/building-your-application/caching#react-cache-function
 */

import { cache } from "react";

import { getDataFromDB } from "@/lib/data";
import User from "./user";

const cachedGetDataFromDB = cache(getDataFromDB);

export default async function Page({ params }: { params: { name: string } }) {
  const { name } = params;
  const data = await cachedGetDataFromDB(name);
  return (
    <div>
      <h2>react cache example</h2>
      <div>hello {data.name}</div>
      <User name={name} />
    </div>
  );
}
