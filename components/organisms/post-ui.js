import TableMeetingSVG from "../atoms/assets/table-meeting-svg";
import TagStrip from "../molecules/tag-strip";
import CTAButton from "../atoms/buttons/cta";
import { formatDate } from "../../utils/helpers/helpers";
import CalendarIcon from "../atoms/icons/calendar";
import FileIcon from "../atoms/icons/file";
import InstitutionIcon from "../atoms/icons/institution";
import LocationPinIcon from "../atoms/icons/location-pin";
import CheckedClipboardIcon from "../atoms/icons/checked-clipboard";
import RichText from "../molecules/rich-text-render";

export function PostUI(props) {
  const highlights = [
    {
      icon: <CalendarIcon style="h-5 w-5" />,
      text: "Deadline: " + formatDate(props.post.applicationDeadline),
    },
    { icon: <FileIcon style="h-5 w-5" />, text: props.post.employer },
    {
      icon: <InstitutionIcon style="h-5 w-5" />,
      text: props.post.jobType.join(" · "),
    },
    {
      icon: <LocationPinIcon style="h-5 w-5" />,
      text: props.post.location.join(" · "),
    },
    {
      icon: <CheckedClipboardIcon style="h-5 w-5" />,
      text: props.post.sector.join(" · "),
    },
  ];

  return (
    <div className={props.organismContainer + " space-y-8"}>
      <h1 className="text-4xl font-bold text-center font-opensans">
        {props.post.title}
      </h1>
      <TableMeetingSVG style={" "} />
      <TagStrip moleculeStyle="" highlights={highlights} />
      <CTAButton
        text="Apply Now"
        style=" mx-auto"
        href={"https://" + props.post.link}
        target="_blank"
      />
      <RichText richText={props.post.description} moleculeStyle={"text-center"} />
      <div>{props.post.tags}</div>
    </div>
  );
}
