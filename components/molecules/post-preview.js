import Image from "next/image";
import { formatDateShort } from "../../utils/helpers/helpers";

export function PostPreview(props) {
  return (
    <a
      target="_blank"
      href={"/posts/" + props.post.fields.slug}
      rel="noopener noreferrer"
    >
      <div className=" cursor-pointer flex flex-row mt-4 items-center align-middle space-x-6 w-full">
        <div className="h-24 w-24 flex-none ">
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
          <p className="font-bold text-3xl">{props.post.fields.title}</p>
          <div className="flex flex-wrap">
            <div className="text-motivezred pr-2">
              {props.post.fields.employer}
            </div>
            <div>{props.post.fields.location.join(" · ")}</div>
          </div>
          <div className="sm:flex hidden">
            {props.post.fields.previewDescription}
          </div>
        </div>
        <div className="flex flex-none flex-col text-center">
          <p className="">Deadline</p>
          <p className="font-bold">
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
    </a>
  );
}
