import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Comfortaa} from '@next/font/google'

const comfortaa = Comfortaa({weight: '400', subsets: ['latin-ext'], display: 'swap'})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${comfortaa.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )

}
