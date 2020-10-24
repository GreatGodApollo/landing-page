import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

const name = 'Brett Bender'
export const siteTitle = 'Brett Bender Landing Page'

export default function Layout ({ children, home, blog, post }) {
  return <div className="max-w-xl px-4 mt-12 mb-24 mx-auto">
    <Head>
      <link rel="icon" href="/favicon.ico"/>
      <meta
        name="description"
        content="Learn how to build a personal website with Next.js"
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <Nav />
    <header className="flex flex-col items-center">
      {home
        ? (
            <>
              <img
                src="/images/profile.png"
                className="w-24 h-24 rounded-full"
                alt={name}
              />
              <h1 className="text-4xl leading-5 my-4 font-bold">{name}</h1>
            </>
          )
        : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.png"
                    className="w-24 h-24 rounded-full"
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className="text-4xl leading-5 my-4 font-bold">
                <Link href="/">
                  <a className="color-inherit">{name}</a>
                </Link>
              </h2>
            </>
          )}
    </header>
    <main>{children}</main>
    {!home && !blog && post && (
      <div className="mt-12">
        <Link href="/blog">
          <a>← Back to blog</a>
        </Link>
      </div>
    )}
    {!home && blog && !post && (
      <div className="mt-12">
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    )}
  </div>
}
