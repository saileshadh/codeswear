import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
        <Head>
          <title>Ecommerce by Sailesh</title>
          <meta name="description" content="Designed by Sailesh Addhikari" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
              {/* <Navbar/> */}
              <div className='h-[82vh] flex justify-center items-center bg-yellow-50'>
              <Image src="/front.jpg" alt='home page image' width={800} height={600}/>
          </div>
          {/* <Footer/> */}
      </div>

  )
}
