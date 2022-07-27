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
  
  about: [
    {type: 'autogenerated', dirName: 'about'},
    {
      type: 'category',
      label: 'Protocol Specs',
      collapsed: true,
      link: {type: 'doc', id: 'specs/README'},
      items: [
          {
            type: 'category',
            label: 'Beacon Chain',
            collapsed: true,
            link: {type: 'doc', id: 'specs/gbc/README'},
            items: [
              'specs/gbc/upgradeability',
              'specs/gbc/faq',
            ],
          },
          {
            type: 'category',
            label: 'Consensus',
            collapsed: true,
            link: {type: 'doc', id: 'specs/consensus/README'},
            items: [
              'specs/consensus/aura',
              'specs/consensus/posdao',
              'specs/consensus/gbc',
            ],
          },
          {
            type: 'category',
            label: 'Hard Forks',
            collapsed: true,
            link: {type: 'doc', id: 'specs/hard-forks/README'},
            items: [
              'specs/hard-forks/21735000',
              'specs/hard-forks/19040000',
              'specs/hard-forks/16101500',
              'specs/hard-forks/9186425',
              'specs/hard-forks/7298030',
              'specs/hard-forks/2508800',
              'specs/hard-forks/1604400',
              'specs/hard-forks/spec.json-update',
            ],
          },
          'specs/security-audit',
          'specs/media-kit',
          'specs/community',

      ],
    },
  ],
  userguide: [{type: 'autogenerated', dirName: 'user-guide'}],
  developers: [{type: 'autogenerated', dirName: 'developers'}],
  node: [
    'node/README',
    'node/incentives',
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      link: {type: 'doc', id: 'node/get-started/README'},
      items: [
        "node/get-started/responsibilities",
        "node/get-started/technical-requirements",
        "node/get-started/setup-gnosis-chain-node",
      ],
    },
    {
      type: 'category',
      label: 'Client setup',
      collapsed: true,
      link: {type: 'doc', id: 'node/client/README'},
      items: [
        "node/client/lighthouse",
        "node/client/nimbus",
        "node/client/prysm",
        "node/client/nethermind-node-setup",
        "node/client/connect-to-a-gc-node",
        "node/client/node-monitoring",
        "node/client/migrate-clients",
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: true,
      //link: {type: 'doc', id: 'node/operations/README'},
      items: [
        "node/operations/README",
        "node/operations/deposit-safety-instructions",
        "node/operations/manual-deposit-method",
        "node/operations/convert-gno-to-mgno",
        "node/operations/validator-withdrawals",
        "node/operations/voluntary-exit",
        "node/operations/migrating-a-validator",
      ],
    },
    {
      type: 'link',
      label: 'Landing Page',
      href: 'https://www.gnosischain.com/',
    },
  ],
  bridge: [{type: 'autogenerated', dirName: 'bridges'}],
  
  tools: [
    'tools/README',
    {
      type: 'category',
      label: 'Explorers',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Blockscout',
          href: 'https://blockscout.com/xdai/mainnet/',
        },
        /*{
          type: 'link',
          label: 'GnosisScan',
          href: 'https://gnosisscan.io/',
        },*/
        {
          type: 'link',
          label: 'Beacon Chain',
          href: 'https://beacon.gnosischain.com/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Analytics',
      collapsed: true,
      items: [
        'tools/analytics/dune',
        'tools/analytics/anyblock',
        'tools/analytics/beacon-chain',
      ],
    },
    {
      type: 'category',
      label: 'Beacon Chain',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Deposit Tool',
          href: 'https://deposit.gnosischain.com/',
        },
        'tools/beacon-chain/liquid-staking',
      ],
    },
    {
      type: 'category',
      label: 'Other Tools',
      collapsed: true,
      items: [
        {
          type: 'link',
          label: 'Crypto Tax Calculator',
          href: 'https://cryptotaxcalculator.io/exchanges/xdai-tax/',
        },
        {
          type: 'link',
          label: 'Wrapeth',
          href: 'https://wrapeth.com/',
        },
        {
          type: 'link',
          label: 'CryptoFees',
          href: 'https://cryptofees.info/',
        },
        {
          type: 'link',
          label: 'DeFi Lama',
          href: 'https://defillama.com/chain/Gnosis',
        },
      ],
    },
  ],

  integrations: [{type: 'autogenerated', dirName: 'integrations'}],
  ecosystems: [{type: 'autogenerated', dirName: 'ecosystems'}],
  
/*
  overview: [
    {type: 'autogenerated', dirName: 'tutorials'},
    {type: 'autogenerated', dirName: '.'}
  ],
  governance: [
    'governance/README',
    'governance/community',
    {
      type: 'category',
      label: 'Gnosis Chain Bridge',
      collapsed: false,
      items: [
        'governance/bridge',
        'governance/board-decisions',
      ],
    },
  ],
  */
};

module.exports = sidebars;
