import tokens from '../tokens/tokens-rop.json';

export default {
  name: 'ROP',
  name_long: 'Ropsten',
  homePage: 'https://github.com/ethereum/ropsten',
  blockExplorerTX: 'https://ropsten.etherscan.io/tx/[[txHash]]',
  blockExplorerAddr: 'https://ropsten.etherscan.io/address/[[address]]',
  chainID: 3,
  tokens: tokens,
  contracts: [],
  currencyName: 'ROP'
};
