import { Deal, Footer, Hero, Navbar, Release, Section } from '../../components';

const Home = () => {
  return (
    <div>
      
          <div className=''>
            <Navbar />
            <div className="max-w-[1440px] mx-auto">
              <Deal />
              <Hero />
              <Release/>
              <Section  />
              <Footer />
            </div>
          </div>
  
    </div>
  )
}

export default Home
