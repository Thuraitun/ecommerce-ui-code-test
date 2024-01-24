import { useEffect, useState } from 'react';
import { Deal, Footer, Hero, Navbar, Release, Section } from '../../components';
import axios from 'axios';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        'https://dummyjson.com/products?limit=6'
    );
    setProducts(data.products);
    } catch(error) {
      alert(error.message);
    } finally { 
      setIsLoading(false);
    }

  };
  return (
    <div>
      {
        isLoading ? <div>Loading...</div> :  (
          <div className=''>
            <Navbar />
            <div className="max-w-[1440px] mx-auto">
              <Deal products={products} />
              <Hero />
              <Release/>
              <Section products={products} />
              <Footer />
            </div>
          </div>
        )
      }
  
    </div>
  )
}

export default Home
