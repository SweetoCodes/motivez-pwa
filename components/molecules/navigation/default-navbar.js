export default function DefaultNavBar({
  currentUser,
  extendedNav,
  scrolled,
  pageLinks,
}) {
  return (
    <div
      className={
        "flex flex-row max-w-7xl px-6 py-2 mx-auto justify-between border-b-2 transform duration-500 " +
        (scrolled ? " border-grey-100" : " border-white ")
      }
    >
      <div className="uppercase font-bold">Motivez</div>
      <div className="flex flex-row">
        <div>Page Nav</div>
        <div>Login/Signup - User photo</div>
      </div>
    </div>
  );
}
