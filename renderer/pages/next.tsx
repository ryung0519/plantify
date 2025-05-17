import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export default function NextPage() {
  const [inputMessage, setInputMessage] = useState<string>("WTF");
  const [message, setMessage] = useState<string>('No message found');

  // 예시 : IPC 통신을 통한 백엔드 영역 제어
  function onClickEvent(e: any) {
    window.ipc.send("message", inputMessage);

    window.ipc.on('message', (event: string) => {

      setMessage(event)
    });
  }

  return (
    <Fragment>
      <Head>
        <title>Next - Nextron (with-tailwindcss)</title>
      </Head>

      <div className="grid grid-col-1 text-2xl w-full text-center mt-20">
        <div className="ml-auto mr-auto">
          <Image
            src="/images/logo.png"
            alt="Logo image"
            width={256}
            height={256}
          />
        </div>

        <span>⚡ Nextron ⚡</span>

        <div className="flex flex-col mt-1 w-full flex-wrap flex justify-center">
          <Link href="/home">
            <Button>Go to home page</Button>
          </Link>

          <div className="flex flex-col">
            <Input
              type="text"
              placeholder='Try set to ipc message text'
              onChange={(e) => {
                setInputMessage(e.currentTarget.value);
              }}
            />
            <Button onClick={onClickEvent}>
              IPC connection test
            </Button>
          </div>

          {message !== 'No message found' ? (
            <div>
              <p>result: {message}</p>
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  )
}
