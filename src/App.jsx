import HomeCards from "./components/HomeCards"
import Header from "./components/Header"
import Hero from "./components/Hero"
import JobListings from "./components/JobListings"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeCards />
        <JobListings />
      </main>
      <footer></footer>
    </>
  )
}

export default App
