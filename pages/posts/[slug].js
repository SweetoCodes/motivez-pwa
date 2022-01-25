import { createClient } from "contentful";
import SEO from "../../components/global/SEO";
import NavBar from "../../components/organisms/navbar";
import { PostUI } from "../../components/organisms/posts/post-ui";

export default function Post({ post }) {
  return (
    <div>
      <SEO
        title={"Motivez: " + post.fields.title}
        description={post.fields.title}
        keywords={"" + post.fields.tags.join(", ")}
        imagePreview={"https:" + post.fields.thumbnail.fields.file.url}
      />
      <NavBar scrollThreshold={20} pageLinks={[]}/>
      <PostUI organismContainer="max-w-xl mx-auto px-4 w-full" post={post.fields}/>
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