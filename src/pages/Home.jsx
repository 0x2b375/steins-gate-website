import Hero from "../components/Hero";
import About from "./About";
import TimelinePage from "./Timeline";
import DMailSender from "../components/DMailSender";
import DivergenceMeter from "../components/DivergenceMeter";
import RandomQuote from "../components/RandomQuote";
import FutureGadgets from "../components/FutureGadget";
import { FloatButton } from 'antd';

function Home() {
  return (
    <div>
      <section id='hero'>
        <Hero />
      </section>
      <section id='interactive' className=' py-16'>
        <div className='container mx-auto'>
          <h2 className='text-4xl text-center mb-10 text-accent'>
            Interactive Lab
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <DMailSender />
            <DivergenceMeter />
          </div>
          <RandomQuote />
          <div className='mt-16'>
            <h3 className='text-3xl text-center mb-8 text-accent'>
              Future Gadgets
            </h3>
            <FutureGadgets />
          </div>
        </div>
      </section>
      <FloatButton.BackTop tooltip='Back to Top' duration={900}/>
      <section id='timeline'>
        <TimelinePage />
      </section>
      <section id='about'>
        <About />
      </section>
    </div>
  );
}

export default Home;
