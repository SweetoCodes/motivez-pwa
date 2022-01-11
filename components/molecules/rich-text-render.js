import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import P from "../atoms/text/p";
import H1 from "../atoms/text/h1";
import H2 from "../atoms/text/h2";
import H3 from "../atoms/text/h3";
import { Bold } from "../atoms/text/bold";
import { Underline } from "../atoms/text/underline";
import { Italic } from "../atoms/text/italic";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function RichText(props) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: (text) => <Underline>{text}</Underline>,
      [MARKS.UNDERLINE]: (text) => <Italic>{text}</Italic>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <H1 text={children}/>,
      [BLOCKS.HEADING_2]: (node, children) => <H2 text={children}/>,
      [BLOCKS.HEADING_3]: (node, children) => <H3 text={children}/>,
      [BLOCKS.PARAGRAPH]: (node, children) => <P text={children}/>,
    },
    renderText: (text) => text.replace("!", "?"),
  };

  return(<div className={props.moleculeStyle}>
   {documentToReactComponents(props.richText, options)}
   </div>
  )
}
