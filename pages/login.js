import SignUpIn from "../components/organisms/sign-up-in";
import BookGirl from "../components/atoms/assets/book-girl";
import QuestionLink from "../components/molecules/complex-text/question-link";
import { googleAuthChange } from "../lib/firebase";
import { useRouter } from "next/router";
import { loginWithEmailAndPassword } from "../lib/firebase";

export default function Login() {
  const router = useRouter();
  return (
    <div className="">
      <SignUpIn
        image={<BookGirl style="h-full w-full" />}
        title="Welcome Back!"
        secondaryText="Log in to discover new opportunities with Motivez"
        googleButtonText="Log in With Google"
        alternateAuthOptionLink={
          <QuestionLink
            text="Don't have an account? "
            linkText="Sign Up"
            link="/register"
          />
        }
        googleSignInUp={() => googleAuthChange(router)}
        handleEmailFormSubmit={(email, password) => {
          loginWithEmailAndPassword(email, password, router);
        }}
      />
    </div>
  );
}
