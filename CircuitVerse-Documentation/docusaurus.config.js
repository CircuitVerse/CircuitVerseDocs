// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CircuitVerse Documentation',
  tagline: 'Explore Digital Circuits Online',
  favicon: 'img/favicon.ico',

  url: 'https://circuitverse-docs.netlify.app/', // Netlify production URL
  baseUrl: '/',

  organizationName: 'CircuitVerse',
  projectName: 'CircuitVerseDocs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/CircuitVerse/CircuitVerseDocs/edit/main/docs/',
          routeBasePath: '/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: [
            require.resolve('./src/css/theme.css'),
            require.resolve('./src/css/darkTheme.css'),
          ],
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/favicon.ico',
    navbar: {
      title: 'CircuitVerse Docs',
      logo: {
        alt: 'CircuitVerse Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'doc',
          docId: 'chapter1/chapter1-introduction', // Points to Introduction as root
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://circuitverse.org',
          label: 'CircuitVerse Home',
          position: 'left',
        },
        {
          href: 'https://github.com/CircuitVerse/CircuitVerseDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Getting Started', to: '/chapter2/chapter2-gettingstarted' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'CircuitVerse Forum', href: 'https://circuitverse.org/forum' },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/orgs/CircuitVerse/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/CircuitVerse' },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCAK48dCPc_QON6Y5QqqRLOg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CircuitVerse. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['javascript', 'python', 'css'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    algolia: {
      appId: 'DM4KWCC17E',
      apiKey: '39b1e358bb863804871f81fba53b8f1d',
      indexName: 'circuitverse-netlify',
      contextualSearch: true,
      searchParameters: {}, // Optional: Additional Algolia search parameters
    },
  },
};

export default config;
