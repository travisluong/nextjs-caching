import Link from "next/link";

/**
 * router cache example
 *
 * observation
 * - in devtools, observe the prefetching of react server component (rsc) payload
 *
 * reference
 * https://nextjs.org/docs/app/building-your-application/caching#router-cache
 */
export default async function Page() {
  return (
    <div>
      <h2 className="text-2xl mb-5">router cache example</h2>
      <Link href={`/react-cache-example/foo`}>foo</Link>
      <Link href={`/react-cache-example/bar`}>bar</Link>
      <Link href={`/react-cache-example/baz`}>baz</Link>
    </div>
  );
}
