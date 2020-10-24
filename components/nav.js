import Link from 'next/link'

const links = [
  { href: '/asn', label: 'AS139593' },
  { href: '/blog', label: 'Blog' }
]

export default function Nav () {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8 text-gray-900">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <h2 className="text-xl leading-4 font-bold text-center">
              <Link href={href}>
                <a className="color-inherit">{label}</a>
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </nav>
  )
}
