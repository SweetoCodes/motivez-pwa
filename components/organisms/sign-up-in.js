import TextLineDivider from "../atoms/dividers/text-line-divider";
import SVGButton from "../atoms/buttons/svg-button";
import GoogleG from "../atoms/icons/google-g";

export default function SignUpIn({
  image,
  title,
  secondaryText,
  googleButtonText,
}) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col space-y-2">
        <h2>{title}</h2>
        <p>{secondaryText}</p>
        <SVGButton
          children={googleButtonText}
          clicked=""
          svg={<GoogleG style="h-4 w-4" />}
          style="w-full font-bold border-black"
        />
        <TextLineDivider text="OR" />
        <div>Email Sign in</div>
        <div>redirect/ terms and conditions</div>
      </div>
      <div className="flex flex-col w-1/2 max-w-[500px]">{image}</div>
    </div>
  );
}
