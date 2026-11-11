import Header from './components/Header'
import Footer from './components/Footer'
import { Hero, About, Services, Gallery, Social, Visit } from './components/Sections'
export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main"><Hero /><About /><Services /><Gallery /><Social /><Visit /></main>
      <Footer />
    </>
  )
}
