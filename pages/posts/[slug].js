import { createClient } from "contentful";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "posting",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "posting",
    "fields.slug": params.slug,
  });

  return {
    props: { post: items[0] },
  };
};

export default function Post({ post }) {
  return (
    <div>
      <div>{post.fields.title}</div>
      <div>{post.fields.employer}</div>
      <div>{post.fields.jobType}</div>
      <div>{post.fields.link}</div>
      <div>{post.fields.location}</div>
      <div>{post.fields.sector}</div>
      <div>{post.fields.startDate}</div>
      <div>{post.fields.tags}</div>
    </div>
  );
}
