// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SwiftBridge Documentation',
  tagline: 'Seamless crypto bridge on Base network',
  favicon: 'img/favicon.ico',

  url: 'https://docs.swiftbridge.app',
  baseUrl: '/',

  organizationName: 'SwiftBridge',
  projectName: 'swiftbridge-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/SwiftBridge/swiftbridge-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/swiftbridge-social-card.jpg',
      navbar: {
        title: 'SwiftBridge',
        logo: {
          alt: 'SwiftBridge Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/SwiftBridge',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://t.me/swiftbridgebot',
            label: 'Try Bot',
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
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Smart Contracts',
                to: '/docs/contracts/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram Bot',
                href: 'https://t.me/swiftbridgebot',
              },
              {
                label: 'Support',
                href: 'https://t.me/SwiftBridgeSupport',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/swiftbridge',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SwiftBridge',
              },
              {
                label: 'BaseScan',
                href: 'https://sepolia.basescan.org/address/0xFaaE04873914c0102B3c1aA5BCE05C51d0BD3667',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SwiftBridge. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity', 'typescript', 'bash'],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;