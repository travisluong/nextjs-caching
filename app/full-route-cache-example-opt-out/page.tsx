import HelloButton from "@/ui/hello-btn";

/**
 * opt out of full route cache
 */
export const revalidate = 0;

export default function Page() {
  return (
    <div>
      <h2 className="text-2xl">full route cache example</h2>
      <HelloButton />
    </div>
  );
}
