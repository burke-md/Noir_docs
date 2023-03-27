/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Noir',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting_started/nargo_installation',
        {
          type: 'category',
          label: 'Hello World',
          link: {
            type: 'doc',
            id: 'getting_started/hello_world',
          },
          items: ['getting_started/breakdown'],
        },
        'getting_started/solidity_verifier',
        'getting_started/typescript',
      ],
    },
    {
      type: 'category',
      label: 'Language Concepts',
      items: [{ type: 'autogenerated', dirName: 'language_concepts' }],
    },
    {
      type: 'category',
      label: 'Noir Standard Library',
      items: [{ type: 'autogenerated', dirName: 'standard_library' }],
    },
    {
      type: 'category',
      label: 'Modules, Packages and Crates',
      items: [{ type: 'autogenerated', dirName: 'modules_packages_crates' }],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [{ type: 'autogenerated', dirName: 'examples' }],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [{ type: 'autogenerated', dirName: 'advanced' }],
    },
    {
      type: 'doc',
      id: 'coming_soon',
      label: 'Coming Soon',
    },
  ],
};

module.exports = sidebars;
