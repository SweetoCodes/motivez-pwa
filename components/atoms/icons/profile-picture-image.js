import Image from "next/image";

export default function ProfilePictureImage({ currentUser, style }) {
  return (
    <div className={style}>
      <Image
        className="object-cover rounded-full transition duration-1000 ease-in-out"
        src={currentUser.photoURL}
        alt="me"
        width="50"
        height="50"
        layout="responsive"
        alt="Profile Picture"
      />
    </div>
  );
}
