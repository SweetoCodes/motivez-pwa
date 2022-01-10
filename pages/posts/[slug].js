import { createClient } from "contentful";
import SEO from "../../components/global/SEO";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div>
      <SEO
        title={"Motivez: " + post.fields.title}
        description={post.fields.title}
        keywords={"" + post.fields.tags.join(", ")}
        imagePreview={"https:" + post.fields.image.fields.file.url}
      />
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