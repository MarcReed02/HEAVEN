import Image from 'next/image'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import TrendingProducts from '@/components/TrendingProducts'
import Footer from '@/components/Fotter'

export default function Home() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <Banner />
      <TrendingProducts />
      <Footer/>
    </main>
  )
}
