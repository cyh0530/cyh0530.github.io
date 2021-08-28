import type { NextPage } from 'next'
import Header from "@components/molecules/Header";
import Main from "@components/organisms/Main";
import Footer from '@components/molecules/Footer'
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
