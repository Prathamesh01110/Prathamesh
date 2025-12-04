// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  'tutorialSidebar': [
    'intro',
    {
      type: 'category',
      label: 'Mint-OS',
      items: [
        'Mint-OS/MintInstallation',
        'Mint-OS/DeveloperTools',
        'Mint-OS/DesktopCustomization',
      ]
    },
    {
      type: 'category',
      label: 'Nextjs-Shortcut',
      items: ['Nextjs-Shortcut/manage-docs-versions', 'Nextjs-Shortcut/translate-your-site']
    },
    {
      type: 'category',
      label: 'AI & ML',
      items: ['AI/learn', 'AI/tools']
    },
    {
      type: 'category',
      label:'DSA',
      items:['DSA/resource','DSA/basic','DSA/inter','DSA/sys']
    },
    {
      type: 'category',
      label:'Sys Design & Apti',
      items:['system-design/resources','system-design/apptitude']
    },
    {
      type: 'category',
      label:'Cyber-Security',
      items:['cybersecurity/intro']
    }
  ],

  // single versioned sidebar
  // 'openApiSidebar': [
  //   {
  //     type: 'category',
  //     label: 'Petstore',
  //     link: {
  //       type: 'generated-index',
  //       title: 'Petstore API',
  //       description:
  //         'This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.',
  //       slug: '/category/petstore-api'
  //     },
  //     items: petstoreVersionedSidebar
  //   }
  // ],
 
}

export default sidebars
