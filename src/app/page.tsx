import Image from 'next/image'
import BibleChapter from "@/app/BibleChapter";
import CountDown from "@/app/CountDown";

export default function Home() {



  return (

      <div className={"font-sans hover:font-serif text-xl subpixel-antialiased font-semibold"}
          style={{
              position: 'relative',
              height: '100vh',
              width: '100%',
              clipPath: 'inset(0 0 0 0)',
          }}
      >
          <div
              style={{
                  position: 'fixed',
                  height: '100%',
                  width: '100%',
                  left: '0',
                  top: '0',
              }}
          >
              <Image
                  src="images/wedding.svg"
                  layout="fill"
                  objectFit="cover"
                  sizes="100vw"
                  className={`opacity-20`}
                  alt={'alt'}

              />

              <div className={"flex flex-col h-screen justify-center items-center space-x-4 space-y-8"}>
                <BibleChapter/>
                <CountDown/>

              </div>
          </div>
      </div>
  )
}
