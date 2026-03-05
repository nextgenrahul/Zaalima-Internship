import ATSInfoSection from "../Modules/ATSInfoSection"
import FeaturesSection from "../Modules/FeaturesSection"
import Footer from "../Modules/Footer"
import Hero from "../Modules/Hero"
import Navbar from "../Modules/Navbar"
import ResultsSection from "../Modules/ResultsPreview"
import UploadSection from "../Modules/UploadSection"

const Home = () => {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <UploadSection />
      <ResultsSection />
      <FeaturesSection />
      <ATSInfoSection />
    </main>
    <Footer />
    </>
  )
}

export default Home