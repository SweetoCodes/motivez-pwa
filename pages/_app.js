import { AuthProvider } from "../utils/contexts/auth_context";
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      </AuthProvider>
  )
}
