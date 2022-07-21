import Head from 'next/head'
import AllProjects from '~/components/home/all-projects'
import Featured from '~/components/home/featured'
import Footer from '~/components/home/footer'
import Hero from '~/components/home/hero'
import Services from '~/components/home/services'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Furrow: Video Production & Post Production Company</title>
        <meta
          name="description"
          content="Furrow Content is an integrated, full-service creative studio offering video production, creative development, and post production services."
        />
        <meta property="og:image" content="https://furrow.studio/app/uploads/2021/05/frame_86805.jpg"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <Featured />
      <AllProjects />
      <Services />
      <Footer />
    </div>
  )
}

export default Home
