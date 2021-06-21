/*
 If you're edditing this file and want to use the value in the code then you have to import it in site metadata hook

 ./src/hooks/useSiteMetadata.js
 */

module.exports = {
  title: 'Medvision',
  description: 'democratizing AI in medicine',
  author: 'Medvision.io',
  image: '/yellow-metal-design-decoration.jpg',
  siteUrl: 'https://medvision.io',
  copyright: 'MedVision © All rights reserved.',
  postsPerPage: 6,
  googleAnalyticsId: '',
  twitter: 'https://twitter.com/medvision',
  github: 'medvision-io',
  linkedin: '',
  facebook: '',
  instagram: '',
  rss: '/rss.xml',
  blogPage: {
    title: 'Blog',
    subTitle: '',
  },
  productsPage: {
    title: 'Our products',
    subTitle: '',
  },
  contactPage: {
    title: 'Get in touch',
    subTitle: '',
  },
  home: {
    title: 'MedVision',
    subTitle: 'Democratizing AI in medicine',
    productsTitle:
      'A super-fast theme that is easy to get started, using the power of GatsbyJS',
    productsDesc:
      'Using modern CSS properties such as grid, this theme is optimised for speed and mobile devices. Giving users an excellent experience on any device. Future-proofing your product.',
    perks: [
      {
        title: 'Built For Speed',
        description:
          'By using GatsbyJS, the Barcadia site is super-fast out of the box',
        image: '/logos/gatsby-logo.svg',
      },
      {
        title: 'Built For Content',
        description:
          'Contentful helps you edit your application with ease as your business expands',
        image: '/logos/gatsby-logo.svg',
      },
      {
        title: 'Built For Security',
        description:
          'A static site reduces your chance of a security exposure through injection',
        image: '/logos/gatsby-logo.svg',
      },
    ],
  },
};
