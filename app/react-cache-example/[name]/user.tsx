import { cache } from "react";

import { getDataFromDB } from "@/lib/data";

const cachedGetDataFromDB = cache(getDataFromDB);

export default async function User({ name }: { name: string }) {
  const data = await cachedGetDataFromDB(name);
  // const data = await getDataFromDB(name);
  return <div>name: {data.name}</div>;
}
