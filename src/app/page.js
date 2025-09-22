<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0a84954 (feat: Add About, Campaigns, Footer, Founder, Header, Hero, News, Newsletter, Stats, Testimonials, and Topbar components with animations and styling)
import Topbar from './components/Topbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Campaigns from './components/Campaigns'
import About from './components/About'
import Stats from './components/Stats'
import News from './components/News'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Founder from './components/Founder'
import Footer from './components/Footer'
<<<<<<< HEAD

export default function Page() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <About />
        <Campaigns />
        <Stats />
        <News />
        <Testimonials />
        <Newsletter />
        <Founder />
      </main>
      <Footer />
    </>
  )
=======
import Image from "next/image";
=======
>>>>>>> 0a84954 (feat: Add About, Campaigns, Footer, Founder, Header, Hero, News, Newsletter, Stats, Testimonials, and Topbar components with animations and styling)

export default function Page() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <About />
        <Campaigns />
        <Stats />
        <News />
        <Testimonials />
        <Newsletter />
        <Founder />
      </main>
<<<<<<< HEAD
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
>>>>>>> 3ae9fa4 (feat: initialize Next.js project with Tailwind CSS and custom SVG assets)
=======
      <Footer />
    </>
  )
>>>>>>> 0a84954 (feat: Add About, Campaigns, Footer, Founder, Header, Hero, News, Newsletter, Stats, Testimonials, and Topbar components with animations and styling)
}
