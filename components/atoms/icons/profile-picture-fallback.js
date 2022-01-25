export default function ProfilePictureFallback({ currentUser, style }) {
  return (
      <div className={"bg-motivezred text-white rounded-full flex justify-center items-center " + style}>
        <p className="text-center">
          {currentUser ? currentUser.displayName.substring(0, 2) : "PR"}
        </p>
    </div>
  );
}
