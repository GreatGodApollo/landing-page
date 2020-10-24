import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg leading-6 p-px w-full">
        <h2 className="text-2xl leading-6 font-bold pt-4 pb-2">Hey there!</h2>
        <p>
          I am Brett Bender and I like to code stuff. I am a young freelance developer with a love for technology and having fun with it.
        </p>

        <h2 className="text-2xl leading-6 font-bold pt-4 pb-2">Experience</h2>
        <p>
          I started programming around 7 years ago, starting out with Ruby and gradually working my way up the language tree. It wasn’t until recently I decided to
          begin selling my services, but up until that point I mainly did open source work, or random projects for friends.
          I’ve never actually held a position at a proper software development company, but currently help out over
           @ <a href="https://www.radicaldelta.org/">Radical Delta</a>.
        </p>

        <h2 className="text-2xl leading-6 font-bold pt-4 pb-2">Projects</h2>
        <p>
          I’ve worked on a ton of projects, some of them being posted on GitHub, others being private source never to be seen.
          For a quick general overview of what my grubby mitts have touched, check out my GitHub portfolio
           @ <a href="https://github.com/GreatGodApollo">GreatGodApollo</a>.
        </p>

        <h2 className="text-2xl leading-6 font-bold pt-4 pb-2">Contact</h2>
        <p>
          You can email me @ <a href="mailto:brett@brettb.xyz">brett@brettb.xyz</a>
          <br/>
          Text (or call) me @ <a href="tel:+16085712974">+1(608) 571-2974</a>
        </p>
      </section>
    </Layout>
  )
}
