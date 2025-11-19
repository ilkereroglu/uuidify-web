// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UUIDify: Serverless, Scalable UUID API',
  tagline: 'The ultra-fast, reliable, and open-source solution for generating and managing globally unique identifiers.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://uuidify.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ilkereroglu', // Usually your GitHub org/user name.
  projectName: 'uuidify', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'UUIDify',
        logo: {
          alt: 'UUIDify Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Documentation',
          },
          {
            href: 'https://dashboard.uuidify.io',
            label: 'Dashboard',
            position: 'right',
          },
          {
            href: 'https://status.uuidify.io',
            label: 'Status',
            position: 'right',
          },
          {
            href: 'https://github.com/ilkereroglu/uuidify',
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
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/api-reference',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ilkereroglu/uuidify',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/ilkereroglu/uuidify/issues',
              },
            ],
          },
          {
            title: 'SDKs',
            items: [
              {
                label: 'Go SDK',
                href: 'https://github.com/ilkereroglu/uuidify-go',
              },
              {
                label: 'Python SDK',
                href: 'https://github.com/ilkereroglu/uuidify-python',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dashboard',
                href: 'https://dashboard.uuidify.io',
              },
              {
                label: 'Status',
                href: 'https://status.uuidify.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UUIDify. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
