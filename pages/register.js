import SignUpIn from "../components/organisms/sign-up-in";
import LaptopNotesSVG from "../components/atoms/assets/laptop-notes";

export default function Register() {
  return (
    <div className="">
      <SignUpIn
        image={<LaptopNotesSVG style="h-full w-full" />}
        title="Hi There!"
        secondaryText="Sign Up to Discover new opportunities with Motivez"
        googleButtonText="Sign Up With Google"
      />
    </div>
  );
}
