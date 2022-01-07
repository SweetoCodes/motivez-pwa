import { useAddToHomescreenPrompt } from "../../utils/pwa/add-to-homescreen";
import { useState, useEffect } from "react";
import PopupModalPrompt from "../molecules/modals/popup-modal-prompt";

export function PWAInstallPrompt(props) {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = useState(false);

  const hide = () => setVisibleState(false);

  useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  if (!isVisible) {
    return null;
  }

  return (
    <PopupModalPrompt title={props.title} text={props.text} ctatext={props.ctatext} hide={hide} promptToInstall={promptToInstall} />
  );
}
