import { createClient } from "contentful";
import { PostPreviews } from "../../components/organisms/posts/post-previews";

export default function Posts({ posts }) {
  return <div className="">
    <PostPreviews posts={posts}/>
  </div>;
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "posting" });

  return {
    props: {
      posts: res.items,
    },
  };
}

