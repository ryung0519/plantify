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
        <title>Plantify</title>
      </Head>

      <main className="grid grid-col-1 text-2xl w-full text-center mt-20">
        <div className="ml-auto mr-auto">
          <Image
            priority
            src="/images/leaf_logo.png"
            alt="logo"
            width={128}
            height={128}
          />
        </div>

        <h1 className="text-lg font-semibold">
          조경상품 옥션
        </h1>
        <p>With Blockchain</p>
        <p>Crossbuild for Web or Desktop</p>

        <div className="mt-1 w-full flex-wrap flex justify-center">
          <Link href={'/next'}>
            <Button>Click me</Button>
          </Link>
        </div>
      </main>
    </Fragment>
  )
}
