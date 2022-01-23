import TextLineDivider from "../atoms/dividers/text-line-divider";

export default function SignUpIn({image, title, secondaryText   }) {

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <h2>{title}</h2>
        <p>{secondaryText}</p>
        <div>Google Auth Change Button</div>
        <TextLineDivider text="OR"/>
        <div>Email Sign in</div>
        <div>redirect/ terms and conditions</div>
      </div>
      <div className="flex flex-col w-1/2 max-w-[500px]">
       {image}
      </div>

    </div>
  );
}
