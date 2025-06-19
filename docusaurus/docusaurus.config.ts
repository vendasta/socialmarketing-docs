import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Social Marketing',
  tagline: 'Scale your social marketing solutions with AI',
  favicon: 'img/social-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.vendasta.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vendasta', // Usually your GitHub org/user name.
  projectName: 'socialmarketing-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-logo.png',
    navbar: {
      title: 'Social Marketing',
      logo: {
        alt: 'Social Marketing Logo',
        src: 'img/social-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Overview',
        },
        {
          href: 'https://www.vendasta.com',
          label: 'Vendasta',
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
              label: 'Social Marketing',
              to: '/docs/index',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Help Center',
              href: 'https://support.vendasta.com',
            },
            {
              label: 'Community',
              href: 'https://community.vendasta.com',
            },
            {
              label: 'Blog',
              href: 'https://www.vendasta.com/blog',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Vendasta',
              href: 'https://www.vendasta.com/about',
            },
            {
              label: 'Contact',
              href: 'https://www.vendasta.com/contact',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vendasta Technologies Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
