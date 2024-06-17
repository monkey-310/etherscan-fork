import { NavMenuType, ThemeOptionData } from './definition';
import {
  faSun,
  faMoon,
  faStarAndCrescent,
  faArrowsRotate,
  faDownload,
  faFileInvoiceDollar,
  faGasPump,
  faArrowRightArrowLeft,
  faServer,
  faSignsPost,
  faMagnifyingGlassChart,
  faShield,
  faSignature,
  faMessage,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';

export const themeOptions: { [key: string]: ThemeOptionData } = {
  light: {
    label: 'Light',
    icon: faSun,
  },
  dim: {
    label: 'Dim',
    icon: faStarAndCrescent,
  },
  dark: {
    label: 'Dark',
    icon: faMoon,
  },
};

export const navbarData: NavMenuType[] = [
  {
    label: 'Blockchain',
    data: [
      { label: 'Transactions', subLabel: null, icon: null, badge: null },
      {
        label: 'Pending Transactions',
        subLabel: null,
        icon: null,
        badge: null,
      },
      {
        label: 'Contract Internal Transactions',
        subLabel: null,
        icon: null,
        badge: null,
      },
      { label: 'Beacon Deposits', subLabel: null, icon: null, badge: null },
      { label: 'Beacon Withdrawals', subLabel: null, icon: null, badge: null },
      { label: 'view Blobs', subLabel: null, icon: null, badge: null },
      { label: '', icon: null, subLabel: null, badge: null },
      { label: 'View Blocks', subLabel: null, icon: null, badge: null },
      {
        label: 'Forked Blocks (Reorgs)',
        subLabel: null,
        icon: null,
        badge: null,
      },
      { label: 'Uncles', subLabel: null, icon: null, badge: null },
      { label: '', subLabel: null, icon: null, badge: null },
      { label: 'Top Accounts', subLabel: null, icon: null, badge: null },
      { label: 'Verified Contracts', subLabel: null, icon: null, badge: null },
    ],
  },
  {
    label: 'Tokens',
    data: [
      { label: 'Top Tokens', subLabel: 'ERC-20', icon: null, badge: null },
      { label: 'Token Transfers', subLabel: 'ERC-20', icon: null, badge: null },
    ],
  },
  {
    label: 'NFTs',
    data: [
      { label: 'Top NFTs', subLabel: null, icon: null, badge: null },
      { label: 'Top Mints', subLabel: null, icon: null, badge: null },
      { label: 'Latest Trades', subLabel: null, icon: null, badge: null },
      { label: 'Latest Transfers', subLabel: null, icon: null, badge: null },
      { label: 'Latest Mints', subLabel: null, icon: null, badge: null },
    ],
  },
  {
    label: 'Resources',
    data: [
      { label: 'Charts And Stats', subLabel: null, icon: null, badge: null },
      { label: 'Top Statistics', subLabel: null, icon: null, badge: null },
      { label: 'Leaderboard', subLabel: null, icon: null, badge: null },
      { label: '', subLabel: null, icon: null, badge: null },
      { label: 'Directory', subLabel: null, icon: null, badge: null },
      { label: 'Newsletter', subLabel: null, icon: null, badge: null },
      { label: 'Knowledge Base', subLabel: null, icon: null, badge: null },
    ],
  },
  {
    label: 'Developers',
    data: [
      { label: 'API Plans', subLabel: null, icon: null, badge: null },
      { label: 'API Documentation', subLabel: null, icon: null, badge: null },
      { label: '', subLabel: null, icon: null, badge: null },
      { label: 'Code Reader', subLabel: null, icon: null, badge: 'Beta' },
      { label: 'Verify Contract', subLabel: null, icon: null, badge: null },
      {
        label: 'Similar Contract Search',
        subLabel: null,
        icon: null,
        badge: null,
      },
      {
        label: 'Smart Contract Search',
        subLabel: null,
        icon: null,
        badge: null,
      },
      {
        label: 'Contract Diff Checker',
        subLabel: null,
        icon: null,
        badge: null,
      },
      { label: '', subLabel: null, icon: null, badge: null },
      {
        label: 'Vyper Online Compiler',
        subLabel: null,
        icon: null,
        badge: null,
      },
      { label: 'Bytecode to Opcode', subLabel: null, icon: null, badge: null },
      {
        label: 'Broadcast Transaction',
        subLabel: null,
        icon: null,
        badge: null,
      },
    ],
  },
];

export const navMoreData: NavMenuType[] = [
  {
    label: 'Tools',
    data: [
      {
        label: 'Unit Converter',
        subLabel: null,
        icon: faArrowsRotate,
        badge: null,
      },
      { label: 'CSV Export', subLabel: null, icon: faDownload, badge: null },
      {
        label: 'Account Balance Checker',
        subLabel: null,
        icon: faFileInvoiceDollar,
        badge: null,
      },
    ],
  },
  {
    label: 'Explore',
    data: [
      { label: 'Gas Tracker', subLabel: null, icon: faGasPump, badge: null },
      {
        label: 'DEX Tracker',
        subLabel: null,
        icon: faArrowRightArrowLeft,
        badge: null,
      },
      { label: 'Node Tracker', subLabel: null, icon: faServer, badge: null },
      { label: 'Label Cloud', subLabel: null, icon: faSignsPost, badge: null },
      {
        label: 'Domain Name Lookup',
        subLabel: null,
        icon: faMagnifyingGlassChart,
        badge: null,
      },
    ],
  },
  {
    label: 'Services',
    data: [
      {
        label: 'Token Approvals',
        subLabel: null,
        icon: faShield,
        badge: 'Beta',
      },
      {
        label: 'Verified Signature',
        subLabel: null,
        icon: faSignature,
        badge: null,
      },
      {
        label: 'Input Data Messages (IDM)',
        subLabel: null,
        icon: faMessage,
        badge: 'Beta',
      },
      {
        label: 'Advanced Filter',
        subLabel: null,
        icon: faFilter,
        badge: 'Beta',
      },
      {
        label: 'Blockscan Chat',
        subLabel: null,
        icon: faMessage,
        badge: 'Beta',
      },
    ],
  },
];

export const chainlinkEthUsdAbi = [
  {
    type: 'function',
    name: 'latestAnswer',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: 'answer', type: 'int256' }],
  },
  {
    type: 'function',
    name: 'latestRound',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: 'roundId', type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'getRoundData',
    stateMutability: 'view',
    inputs: [{ name: '_roundId', type: 'uint80' }],
    outputs: [
      { name: 'answer', type: 'int256' },
      { name: 'updatedAt', type: 'int256' },
    ],
  },
] as const;

export const chainlinkEthBtcAbi = [
  {
    type: 'function',
    name: 'latestRoundData',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: 'answer', type: 'int256' }],
  },
] as const;
