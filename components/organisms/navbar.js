import { AuthContext } from "../../utils/contexts/auth_context";
import { useContext, useState } from "react";
import DefaultNavBar from "../molecules/navigation/default-navbar";
import ExtendedNavBar from "../molecules/navigation/extended-navbar";
import { useScrollPosition } from "../../utils/hooks/useScrollPosition";

export default function NavBar({ scrollThreshold, pageLinks }) {
  const { currentUser } = useContext(AuthContext);
  const [extendednavshown, setExtendedNavShown] = useState(false);
  const scrolled = useScrollPosition(scrollThreshold);

  return (
    <div className="sticky top-0 bg-white">
      <DefaultNavBar
        currentUser={currentUser}
        extendedNav={extendednavshown}
        scrolled={scrolled}
        pageLinks={pageLinks}
      />
      {extendednavshown && <ExtendedNavBar pageLinks={""} />}
    </div>
  );
}
