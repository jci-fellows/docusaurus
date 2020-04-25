module.exports = {
  title: 'Johnson Controls International (JCI) Fellows Program',
  tagline: 'Supporting energy research at the University of Hawaii',
  url: 'https://jci-fellows.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jci-fellows', // Usually your GitHub org/user name.
  projectName: 'jci-fellows.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'JCI Fellows Programs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/uh-system-seal.jpg',
      },
      links: [
        {
          to: 'docs/motivation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'News', position: 'left'},
        {
          href: 'https://github.com/jci-fellows/',
          label: 'GitHub',
          position: 'left',
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
              label: 'Markdown Guide',
              to: 'docs/markdown-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'News',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jci-fellows/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} University of Hawaii.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/jci-fellows/docusaurus/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
