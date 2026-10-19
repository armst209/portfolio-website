import Link from 'next/link';

const columns = [
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/artists', label: 'For Artists' },
      { href: '/events', label: 'Events' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { href: '/releases', label: 'Releases' },
      { href: '/vault', label: 'Vault' },
      { href: '/search', label: 'Search' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/terms', label: 'Privacy & Terms' },
      { href: '/account', label: 'Your account' },
    ],
  },
];

const Footer = () => (
  <footer className="mx-4 mt-16 border-t border-edge px-0 pt-10 pb-28 md:mx-8 md:pb-12">
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      {columns.map(({ heading, links }) => (
        <div key={heading}>
          <p className="mb-3 font-bold">{heading}</p>
          <ul className="flex flex-col gap-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-subdued transition-colors hover:text-white hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p className="mt-10 text-sm text-subdued">
      &copy; Biscuits &apos;n&apos; Groovy. New music is our jam.
    </p>
  </footer>
);

export default Footer;
