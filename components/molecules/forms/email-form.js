import TextInput from "../../atoms/inputs/text-input";
import { useState } from "react";

export default function EmailForm({ style }) {
  const [emailError, setEmailErorr] = useState(null);
  const [passwordError, setPasswordErorr] = useState(null);

  return (
    <form className={style}>
      <TextInput
        style="mb-4"
        label="Email"
        type="email"
        id="email"
        error={emailError}
        placeholder="george@motivez.com"
      />
      <TextInput
        style="mb-4"
        label="Password"
        type="password"
        id="password"
        error={passwordError}
        placeholder="******************"
      />
    </form>
  );
}