import Head from 'next/head'
import AllProjects from '~/components/home/all-projects'
import Featured from '~/components/home/featured'
import Hero from '~/components/home/hero'
import Services from '~/components/home/services'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Featured />
      <AllProjects />
      <Services />
    </div>
  )
}

export default Home
