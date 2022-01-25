import { createClient } from "contentful";
import { PostPreviews } from "../../components/organisms/posts/post-previews";
import NavBar from "../../components/organisms/navbar";

export default function Posts({ posts }) {
  return <div className="">
    <NavBar scrollThreshold={20} pageLinks={[]}/>
    <PostPreviews organismContainer="mx-auto px-4" posts={posts}/>
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

