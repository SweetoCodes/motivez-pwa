import Link from "next/link";
import Image from "next/image";
import { formatDateShort } from "../../utils/helpers/helpers";

export function PostPreview(props) {
  return (
    <Link href={"/posts/" + props.post.fields.slug}>
      <div className=" cursor-pointer flex flex-row mt-4 items-center align-middle space-x-6 w-full">
        <div className="h-20 w-20 flex-none ">
          <Image
            src={"https:" + props.post.fields.thumbnail.fields.file.url}
            width={props.post.fields.thumbnail.fields.file.details.image.width}
            height={
              props.post.fields.thumbnail.fields.file.details.image.height
            }
            layout="responsive"
          />
        </div>
        <div className="grow space-y-1">
          <div>{props.post.fields.title}</div>
          <div className="flex flex-row">
            <div>{props.post.fields.employer}</div>
            <div>{props.post.fields.location}</div>
          </div>
          <div>{props.post.fields.previewDescription}</div>
        </div>
        <div className="flex flex-none flex-col text-center">
          <p>Deadline</p>
          <p>
            {
              formatDateShort(props.post.fields.applicationDeadline).split(
                " "
              )[0]
            }
          </p>
          <p>
            {
              formatDateShort(props.post.fields.applicationDeadline).split(
                " "
              )[1]
            }
          </p>
        </div>
      </div>
    </Link>
  );
}