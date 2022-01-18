import { PostPreview } from "../../molecules/post-preview";

export function PostPreviews(props) {
  return (
    <div className={props.organismContainer + " space-y-8 border max-w-[800px] w-full"}>
      {props.posts.map((info, idx) => (
        <PostPreview post={info}/>
      ))}
    </div>
  );
}
