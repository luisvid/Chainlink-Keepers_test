import { HardhatUserConfig } from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import { node_url, accounts } from './utils/network';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.0',
  },
  networks: {
    ropsten: {
      url: node_url('ropsten'),
      accounts: accounts('ropsten'),
    },
    bsctestnet: {
      url: node_url('bsctestnet'),
      accounts: accounts('bsctestnet'),
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      3: '0xB5664e6278009bE57131a466750370898E1F72f7',  // ropsten
      97: '0xB5664e6278009bE57131a466750370898E1F72f7', // bsc testnet
      56: '', // bsc mainnet
    },
    owner: {
      default: 1,
      3: '0x9A30EC0b6412649802542a881B71865197cc132D',
      97: '0x9A30EC0b6412649802542a881B71865197cc132D',
      56: '',
    },
    gov: {
      default: 2,
      3: '0x723a19676EF0f25989C4cD96E049013B400894d6',
      97: '0x723a19676EF0f25989C4cD96E049013B400894d6',
      56: '',
    },
    admin: {
      default: 3,
      3: '0xc2A50A453031eece2bA552388930B9edAaE6F465',
      97: '0xc2A50A453031eece2bA552388930B9edAaE6F465',
      56: '',
    },
    treasury: {
      default: 4,
      3: '0x64bE3609bfea95d53317243146C3a428709B1FA4',
      97: '0x64bE3609bfea95d53317243146C3a428709B1FA4',
      56: '',
    },
    keeper: {
      default: 5,
      3: '0xaaC9F2423760D20eD3AE4d4b2f2126245D4c05bf',
      97: '0xaaC9F2423760D20eD3AE4d4b2f2126245D4c05bf',
      56: '',
    },
    platform: {
      default: 6,
      3: '0x197f388bADB644996fe24E4F2b36D073599eD348',
      97: '0x197f388bADB644996fe24E4F2b36D073599eD348',
      56: '',
    },
  },
  verify: {
    etherscan: {
      apiKey: process.env.ETHERSCAN_KEY,
    }
  },
};
export default config;


