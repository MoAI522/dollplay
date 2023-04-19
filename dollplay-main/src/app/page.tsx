import { Timeline } from "./timeline/Timeline";

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Timeline />
      <h1>Post</h1>
      <form>
        <textarea name="body" />
        <input type="submit" />
      </form>
    </main>
  );
}
