
import './App.css'
import Footer from './components/footer/Footer'
import Head from './components/head/Head'
import Highlights from './components/highlights/Highlights'
import Section from './components/section/Section'
import TopBar from './components/topBar/TopBar'

function App() {

  return (
    <div className="App">
     <TopBar />
     <Head />
     <Highlights />
     <Section />
     <Footer />
    </div>
  )
}

export default App
