import { PWAInstallPrompt } from "../components/organisms/pwa-install-prompt"

export default function Home() {
  return (<div>
    <div className="font-opensans font-bold text-5xl">
      Init text
    </div>
    <PWAInstallPrompt title={"Install Motivez As An App"} text={"Find new opportunities straight from your phone, install Motivez as an app on your homescreen."} ctatext={"Install"}/>
      </div>
  )
}
