import TextLineDivider from "../atoms/dividers/text-line-divider";
import SVGButton from "../atoms/buttons/svg-button";
import GoogleG from "../atoms/icons/google-g";
import EmailForm from "../molecules/forms/email-form";

export default function SignUpIn({
  image,
  title,
  secondaryText,
  googleButtonText,
  alternateAuthOptionLink,
  termsAndConditionsLink,
}) {
  return (
    <div className="flex flex-row sm:max-w-5xl px-6 mx-auto space-x-[80px] mt-[100px] ">
      <div className="flex flex-col space-y-6 sm:w-1/2 w-full ">
        <h2 className="font-bold">{title}</h2>
        <p className="font-bold">{secondaryText}</p>
        <SVGButton
          children={googleButtonText}
          clicked=""
          svg={<GoogleG style="h-4 w-4" />}
          style="w-full font-bold border-black"
        />
        <TextLineDivider text="OR" />
        <EmailForm/>
        <div className="flex flex-col space-y-1">
          {alternateAuthOptionLink}
          {termsAndConditionsLink}
        </div>
      </div>
      <div className="hidden sm:flex flex-col w-1/2">{image}</div>
    </div>
  );
}
