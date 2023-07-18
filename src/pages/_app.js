import { Inter } from 'next/font/google'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import '@/styles/globals.css'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </main>
  )
}
