import { Fragment, useEffect, useState } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/renderer/components/ui/button'

export default function HomePage() {
  const [message, setMessage] = useState('No message found');

  useEffect(() => {
    window.ipc.on('message', (message: string) => {
      setMessage(message)
    })
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Home - Nextron (with-tailwindcss)</title>
      </Head>

      <main className="grid grid-col-1 text-2xl w-full text-center mt-20">
        <div className="ml-auto mr-auto">
          <Image
            priority
            src="/images/logo.png"
            alt="logo"
            width={256}
            height={256}
          />
        </div>

        <h1 className="text-lg font-semibold">
          Nextron ( Next.Js + Electron ) Boilerplate
        </h1>
        <p>With TypeScript, TailwindCSS and Shadcn/ui</p>
        <p>Crossbuild for Web or Desktop</p>

        <div className="mt-1 w-full flex-wrap flex justify-center">
          <Link href={'/next'}>
            <Button>Click me</Button>
          </Link>
          <Link href={'/greenauction'}>
            <Button>move to green</Button>
          </Link>
        </div>
      </main>
    </Fragment>
  )
}
