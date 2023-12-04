/**
 * ○  (Static)   prerendered as static content
 */
export default async function Page() {
  const res = await fetch("http://localhost:3001?query=helloworld");
  const json = await res.json();

  return (
    <div>
      <h1>static rendering example</h1>
      <p>{json.message}</p>
    </div>
  );
}
