import B2 from "../../atoms/text/b2";
import Link from "next/link";

export default function QuestionLink({ text, linkText, link, style }) {
  return (
    <p className={style}>
      <B2 text={text}></B2>
      <Link href={link}>
        <B2 text={linkText} style="underline font-bold" />
      </Link>
    </p>
  );
}
