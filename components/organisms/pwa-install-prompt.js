import { useBeforeInstallPromptEvent } from "../../utils/pwa/before-install-prompt-event";
import { useState, useEffect } from "react";
import PopupModalPrompt from "../molecules/modals/popup-modal-prompt";
import { installDirectionMessage } from "../../utils/pwa/install-direction-message";

export function PWAInstallPrompt(props) {
  const [prompt, promptToInstall] = useBeforeInstallPromptEvent();
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
