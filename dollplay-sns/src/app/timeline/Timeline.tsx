import { Post } from "@/schema/post";
import { Suspense } from "react";

export const Timeline = async () => {
  return (
    <div>
      <h1>Timeline</h1>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Async Server Component */}
        <Content />
      </Suspense>
    </div>
  );
};

const Content = async () => {
  const posts: Post[] = [
    {
      id: "1",
      createdAt: "2021-08-01T00:00:00Z",
      content: "Hello, world!",
      user: {
        id: "1",
        display_name: "Alice",
      },
      favoritesCount: 0,
      isYourFavorite: false,
    },
    {
      id: "2",
      createdAt: "2021-08-01T00:01:00Z",
      content: "Hello, world!",
      user: {
        id: "2",
        display_name: "Bob",
      },
      favoritesCount: 0,
      isYourFavorite: true,
    },
  ];

  return (
    <div>
      <div>
        {posts.map((v, i) => (
          <article key={i}>
            <div>{v.user.display_name}:</div>
            <div>{v.content}</div>
            <div>{v.favoritesCount}</div>
            <button disabled={v.isYourFavorite}>よいね</button>
            <hr />
          </article>
        ))}
      </div>
    </div>
  );
};

const Loading = () => <div>よみこみちゅ</div>;
