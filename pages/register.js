import SignUpIn from "../components/organisms/sign-up-in";
import LaptopNotesSVG from "../components/atoms/assets/laptop-notes";
import QuestionLink from "../components/molecules/complex-text/question-link"

export default function Register() {
  return (
    <div className="">
      <SignUpIn
        image={<LaptopNotesSVG style="h-full w-full" />}
        title="Hi There!"
        secondaryText="Sign Up to Discover new opportunities with Motivez"
        googleButtonText="Sign Up With Google"
        alternateAuthOptionLink={<QuestionLink text="Already have an account? " linkText="Log In" link="/login"/>}
        termsAndConditionsLink={<QuestionLink text="By signing up, I agree to Motivez’s " linkText={"terms & conditions"} link="/termsandconditions"/>}
      />
    </div>
  );
}