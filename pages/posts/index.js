import { createClient } from "contentful";
import Image from "next/image";

export default function Posts({ posts }) {
  return <div className="">Posts</div>;
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

