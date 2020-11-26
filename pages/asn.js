import Head from 'next/head'
import Layout from '../components/layout'

export default function ASN () {
  return (
    <Layout blog>
      <Head>
        <title>AS139593</title>
      </Head>
      <section className="text-lg leading-6 p-px w-full">
        <h2 className="text-2xl leading-6 font-bold pt-4 pb-2">AS139593</h2>
        <p>
          Hey, I am the owner of AS139593. Odds are, if you visited this page, you&#39;re looking for some information about it.
        </p>

        <h2 className="text-2xl leading-6 font-bold pt-4 pb-2">Peering Policy</h2>
        <p>
          <i>I maintain an open peering policy.</i>
          <br />
          If you can get a connection to me, I&#39;ll peer.
        </p>
        <h3 className="text-xl leading-5 font-bold pt-4 pb-2">Requirements</h3>
        <ul className="list-disc">
          <li>User must have a public ASN allocated by one of the 5 RIRs</li>
          <li>User must have public IPv6 space, allocated by one of the 5 RIRs</li>
          <li>User must have valid IRR records in the IRR database of their RIR</li>
          <li>User must be willing to, on request, verify they control the emails associated with a resource.</li>
          <li>User must not point a default route at my peering session.</li>
          <li>RPKI is strongly encouraged but at this time not mandatory.</li>
        </ul>
      </section>
    </Layout>
  )
}
