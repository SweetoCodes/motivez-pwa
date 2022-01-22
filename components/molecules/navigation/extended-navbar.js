import CTAButton from "../../atoms/buttons/cta";
import PageLink from "../../atoms/text/page-link";

export default function ExtendedNavBar({ moleculeStyle, pageLinks }) {
  return (
    <div className={"md:hidden flex flex-col py-2 border-b-2 " + moleculeStyle}>
      {pageLinks.map((info, idx) => (
        <PageLink text={info.text} href={info.link} style="text-lg py-2" />
      ))}
      <div className="flex flex-row my-2 w-full space-x-2 ">
        <CTAButton text="Sign in" style="w-full" containerStyle="w-1/2" />
        <CTAButton text="Sign Up" style="w-full" containerStyle="w-1/2" />
      </div>
    </div>
  );
}
