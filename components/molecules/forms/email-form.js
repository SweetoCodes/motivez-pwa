import TextInput from "../../atoms/inputs/text-input";
import FullWidthCTAButton from "../../atoms/buttons/full-width-cta";
import { useState } from "react";
import {
  emailValidation,
  passwordValidation,
} from "../../../utils/helpers/helpers";

export default function EmailForm({ style, handleEmailSignUp }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const emailError = emailValidation(email);
  const passwordError = passwordValidation(password);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (emailError == false && passwordError == false) {
      handleEmailSignUp(email, password)
    }
  };

  return (
    <form className={style} onSubmit={handleSubmit}>
      <TextInput
        style="mb-4"
        label="Email"
        type="email"
        id="email"
        error={emailError}
        placeholder="george@motivez.com"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        style="mb-4"
        label="Password"
        type="password"
        id="password"
        error={passwordError}
        placeholder="***********"
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />
      <FullWidthCTAButton
        type="submit"
        disabled={!(emailError == false && passwordError == false)}
        text="Submit"
        style=""
      />
    </form>
  );
}