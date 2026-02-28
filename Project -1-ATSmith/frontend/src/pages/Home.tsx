import Footer from "../components/layout/Footer"
import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero"
import ResultsPreview from "../components/sections/ResultsPreview"
import UploadSection from "../components/sections/UploadSection"

const Home = () => {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <UploadSection />
      <ResultsPreview />
    </main>
    <Footer />
    
    </>
  )
}

export default Home