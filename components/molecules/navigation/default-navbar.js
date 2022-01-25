import ProfilePictureImage from "../../atoms/icons/profile-picture-image";
import ProfilePictureFallback from "../../atoms/icons/profile-picture-fallback";
import TripleVerticalBar from "../../atoms/icons/triple-vertical-bar";
import XIcon from "../../atoms/icons/x";
import Link from "next/link";
import CTAButton from "../../atoms/buttons/cta";
import PageLink from "../../atoms/text/page-link";

export default function DefaultNavBar({
  currentUser,
  extendedNav,
  scrolled,
  pageLinks,
  showExtendedNavBar,
  moleculeStyle,
}) {
  return (
    <div
      className={
        "flex flex-row max-w-7xl py-2 mx-auto justify-between border-b-2 transform duration-500 items-center " +
        (scrolled ? " border-grey-100 " : " border-white ") +
        moleculeStyle
      }
    >
      <Link href={currentUser ? "/posts" : "/"}>
        <div className="uppercase font-bold cursor-pointer text-lg">
          Motivez
        </div>
      </Link>
      <div className="md:flex hidden flex-row items-center space-x-4">
        {pageLinks.map((info, idx) => (
          <PageLink text={info.text} href={info.link} style="text-lg" />
        ))}
        {currentUser ? (

            currentUser.photoURL ? (
              <a href={"/profile"}>
            <ProfilePictureImage currentUser={currentUser} style="h-10 w-10" /></a>
            ) : (
              <a href={"/profile"}> <ProfilePictureFallback style="h-10 w-10" /></a>)

        ) : (
          <div className="flex flex-row space-x-2">
            <CTAButton text="Sign in" href="login" />
            <CTAButton text="Sign Up" href="register" />
          </div>
        )}
      </div>
      <div className="md:hidden flex cursor-pointer transform duration-500">
        {extendedNav ? (
          <div onClick={() => showExtendedNavBar(false)}>
            <XIcon style={"h-8 w-8"} />
          </div>
        ) : (
          <div onClick={() => showExtendedNavBar(true)}>
            <TripleVerticalBar style="h-8 w-8" />
          </div>
        )}
      </div>
    </div>
  );
}
