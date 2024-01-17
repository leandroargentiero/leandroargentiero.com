const SEO = {
  defaultTitle: 'Leandro Argentiero - A Design-Driven Full Stack Developer',
  titleTemplate: '%s | Leandro Argentiero',
  description: `I craft digital solutions for human problems that look good and work well.`,
  canonical: 'https://www.leandroargentiero.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.leandroargentiero.com/',
    site_name: 'Leandro Argentiero',
    images: [
      {
        url: '/static/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Leandro Argentiero Portfolio',
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/static/favicons/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/static/favicons/touch-icon-ipad.jpg',
      sizes: '76x76',
    },
    {
      rel: 'manifest',
      href: '/static/favicons//site.webmanifest',
    },
  ],
  twitter: {
    handle: '@leaero',
    site: '@www.leandroargentiero.com',
    cardType: 'summary_large_image',
  },
};

export default SEO;
