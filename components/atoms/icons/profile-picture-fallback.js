export default function ProfilePictureFallback({ currentUser, style }) {
  return <div className={style}>
      <div className="w-12 h-12 bg-blue-100 rounded-full flex justify-center items-center">
          <p className="text-center">
              {currentUser ? currentUser.displayName.substring(0,2) : "PR"}
          </p>
      </div>
  </div>;
}
