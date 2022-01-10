import SEO from "../components/global/SEO";
import { PWAInstallPrompt } from "../components/organisms/pwa-install-prompt";

export default function Home() {
  return (
    <div>
      <SEO title={"Motivez"} description={"Description"} keywords={"keywords"} imagePreview={"https://charliesweeting.com/assets/profilepicture.png"} />
      <div className="font-opensans font-bold text-5xl">Init text</div>
      <PWAInstallPrompt
        title={"Install Motivez As An App"}
        text={
          "Find new opportunities straight from your phone, install Motivez as an app on your homescreen."
        }
        ctatext={"Install"}
      />
    </div>
  );
}
