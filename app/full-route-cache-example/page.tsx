/**
 * full route cache example
 * by default, the full route cache is persistent
 * this means that the render output is cached across user requests
 *
 * observation
 * - search in .next folder for "full route cache example" to see compile html and javascript
 * - revalidating data cache invalidates the full route cache
 */

import HelloButton from "@/ui/hello-btn";

export default function Page() {
  return (
    <div>
      <h2 className="text-2xl">full route cache example</h2>
      <HelloButton />
    </div>
  );
}
