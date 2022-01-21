import ProfilePictureImage from "../../atoms/icons/profile-picture-image";
import ProfilePictureFallback from "../../atoms/icons/profile-picture-fallback";
import Link from "next/link";

export default function DefaultNavBar({
  currentUser,
  extendedNav,
  scrolled,
  pageLinks,
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
          currentUser.photoURL ? (
            <ProfilePictureImage currentUser={currentUser} style="" />
          ) : (
            <ProfilePictureFallback style="" />
          )
        ) : (
          <div>Login/Logout</div>
        )}
      </div>
      <div className="sm:hidden flex">
        {extendedNav ? <div>x</div> : <div>menu icon</div>}
      </div>
    </div>
  );
}
