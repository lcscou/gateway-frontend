import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav/Nav'
import s from '../styles/Home.module.css'
import Hero from '../components/Hero/Hero'
import Step from '../components/Step/Step'
import Collapse from '../components/Collapse/Collapse'
import FAQ from '../components/FAQ/FAQ'
import Title from '../components/Title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ilustration from '../public/img/ilustration-set-your-goals.png'
import step2 from '../public/img/step2.png'
import step3 from '../public/img/step3.png'
import step4 from '../public/img/step4.png'
import Link from 'next/link'
import ContactForm from '../components/ContactForm/ContactForm'

const Home: NextPage = () => {
  return (<>
    <Nav></Nav>
    <main>

      <Hero
        title="Get high talented developers team to get your project moving"
        target='#stepes'
      />
      <section id='stepes' className='py-20'>

        <Step
          number={1}
          title='Set your goals'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.'
          image={ilustration}
        >
          <Collapse
            title='Set the scope'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
          <Collapse
            title='Budget'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
          <Collapse
            title='Deadline'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
        </Step>
        <Step
          number={2}
          reverse={true}
          title='Build your team'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.'
          image={step2}
        >
          <Collapse
            title='Dedicated Team'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
          <Collapse
            title='Define Profile and Experience'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
          <Collapse
            title='Technologies that will be used'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
        </Step>
        <Step
          number={3}
          title='Grow your product'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.'
          image={step3}
        >
          <Collapse
            title='Project follow-up'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
          <Collapse
            title='Monitoring results'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
        </Step>
        <Step
          number={4}
          reverse={true}
          title='Grow your product'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.'
          image={step4}
        >
          <Collapse
            title='Hire up to 2 developers'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
          <Collapse
            title='Continuos Support'
            content={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.
              </p>
            }
          />
        </Step>
      </section>

      {/* FAQ */}
      <section className=''>
        <div className="container py-20 bg-[#F2F2F2] flex flex-col items-center">
          <Title title="FAQ" />
          <FAQ
            question='Who is this program for?'
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna."
          />
          <FAQ
            question='What is the minimum contract period?'
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna."
          />
          <FAQ
            question='What happens at the end of the program?'
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna."
          />
          <FAQ
            question='Will I be allowed to hire the role team?'
            answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna."
          />
        </div>
      </section>


      <section id='contact' className="bg-primary-900" >
        <div className='grid md:grid-cols-2'>
          <div className="md:p-20 px-5">
            <Title title="Book a call" align='start' variant='white' />
            <p className='text-[#C1DAED]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum turpis eu suscipit viverra. Nunc rhoncus justo nec turpis sodales, vel venenatis purus mollis. Mauris et fermentum urna.</p>
            <ul className='text-white mt-10'>
              <li className='mt-2'><FontAwesomeIcon icon={faArrowRight} />&nbsp; You'll be talking to product and tech expert</li>
              <li className='mt-2'><FontAwesomeIcon icon={faArrowRight} />&nbsp; We will respond to you within 24 hours</li>
            </ul>
          </div>

          <ContactForm /> 

        </div>
      </section>
    </main>

    <footer className='bg-[#507795]'>
      <div className="container py-10">
        <ul className='text-white'>
          <li className='inline mr-4 opacity-80 hover:opacity-100'><Link href={"https://www.appmasters.io/"}>About Us</Link></li>
          <li className='inline mr-4 opacity-80 hover:opacity-100'><Link href={"#about-us"}>Terms and Conditions</Link></li>
          <li className='inline mr-4 opacity-80 hover:opacity-100'><Link href={"#about-us"}>Privacy</Link></li>
          <li className='inline mr-4 opacity-80 hover:opacity-100'><Link href={"#contact"}>Contact</Link></li>
        </ul>
      </div>
    </footer>
  </>
  )
}

export default Home
