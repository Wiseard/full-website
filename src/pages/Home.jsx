import {
  Hero,
  Featured,
  NewArrivals,
  Discover,
  Services,
  Newsletter,
} from '../components/index'

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <NewArrivals />
      <Discover />
      <Services />
      <Newsletter />
    </main>
  )
}
export default Home
