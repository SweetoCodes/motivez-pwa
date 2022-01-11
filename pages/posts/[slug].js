import { createClient } from "contentful";
import SEO from "../../components/global/SEO";
import { PostUI } from "../../components/organisms/post-ui";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div>
      {/* <SEO
        title={"Motivez: " + post.fields.title}
        description={post.fields.title}
        keywords={"" + post.fields.tags.join(", ")}
        imagePreview={"https:" + post.fields.image.fields.file.url}
      /> */}
      <PostUI organismContainer="max-w-xl mx-auto" post={post.fields}/>
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