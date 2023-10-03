import Image from 'next/image'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import SubscribeSection from './components/SubscribeSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <SubscribeSection />
      <Footer />
    </main>
  )
}
