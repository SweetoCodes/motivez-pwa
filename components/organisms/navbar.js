import { AuthContext } from "../../utils/contexts/auth_context";
import { useContext, useState } from "react";
import DefaultNavBar from "../molecules/navigation/default-navbar";
import ExtendedNavBar from "../molecules/navigation/extended-navbar";

// Logged in/out, extendednacbar or not
export default function NavBar() {
  const { currentUser } = useContext(AuthContext);
  const [extendednavshown, setExtendedNavShown] = useState(false);

  return (
    <div>
      <DefaultNavBar currentUser={currentUser} />
      {extendednavshown && <ExtendedNavBar />}
    </div>
  );
}
