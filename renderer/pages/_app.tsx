import React from 'react'
import { useTheme } from 'next-themes';
import type { AppProps } from 'next/app'

import { ThemeProvider } from '../components/provider/theme-provider'
import MainNavbar from '../components/navbar/Navbar';

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={theme}
      enableSystem
      disableTransitionOnChange
    >
      <div className="font-['Pretendard'] w-full">
        <MainNavbar />

        {/* 여기에 root layout을 설정 */}
        <section className="flex flex-row w-full">
          <Component {...pageProps} />
        </section>
      </div>
    </ThemeProvider>
  )
}

export default MyApp