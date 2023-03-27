import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Poppins} from 'next/font/google'
import { Colors } from '@/utils'

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin-ext', 'latin', 'devanagari'],
  display: "swap"
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className}`} style={{
      color: Colors.primaryDark,
    }}>
      <Component {...pageProps} />
    </div>
  )}
