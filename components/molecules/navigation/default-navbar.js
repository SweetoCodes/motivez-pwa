import ProfilePictureImage from "../../atoms/icons/profile-picture-image";
import ProfilePictureFallback from "../../atoms/icons/profile-picture-fallback";
import TripleVerticalBar from "../../atoms/icons/triple-vertical-bar";
import XIcon from "../../atoms/icons/x";
import Link from "next/link";

export default function DefaultNavBar({
  currentUser,
  extendedNav,
  scrolled,
  pageLinks,
  showExtendedNavBar,
}) {
  return (
    <div
      className={
        "flex flex-row max-w-7xl px-6 py-2 mx-auto justify-between border-b-2 transform duration-500 items-center " +
        (scrolled ? " border-grey-100" : " border-white ")
      }
    >
      <Link href={currentUser ? "/home" : "/"}>
        <div className="uppercase font-bold cursor-pointer">Motivez</div>
      </Link>
      <div className="sm:flex hidden flex-row items-center">
        <div>Page Nav</div>
        {currentUser ? (
          <Link href={"/profile"}>
            currentUser.photoURL ? (
            <ProfilePictureImage currentUser={currentUser} style="" />
            ) : (
            <ProfilePictureFallback style="" />)
          </Link>
        ) : (
          <div>Login/Logout</div>
        )}
      </div>
      <div className="sm:hidden flex cursor-pointer transform duration-500">
        {extendedNav ? (
          <div onClick={() => showExtendedNavBar(false)}><XIcon style={"h-6 w-6"}/></div>
        ) : (
          <div onClick={() => showExtendedNavBar(true)}>
            <TripleVerticalBar style="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
}
