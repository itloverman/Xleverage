import { AbiRegistry } from '@multiversx/sdk-core/out';
import abi from 'assets/abi/road-sc.abi.json';

export const contractAddress =
  'erd1qqqqqqqqqqqqqpgq72l6vl07fkn3alyfq753mcy4nakm0l72396qkcud5x';

export const dAppName = 'example Dapp';

// Generate your own WalletConnect 2 ProjectId here: https://cloud.walletconnect.com/app
export const walletConnectV2ProjectId = '9b1a9564f91cb659ffe21b73d5c4e2d8';

export const apiTimeout = 6000;
export const transactionSize = 15;
export const TOOLS_API_URL = 'https://tools.multiversx.com';
/**
 * Calls to these domains will use `nativeAuth` Baerer token
 */
export const sampleAuthenticatedDomains = [TOOLS_API_URL];

export const isDev = true;

export const CONTRACT_ADDRESS = isDev ? 'erd1qqqqqqqqqqqqqpgq0vfa37vvpj9s7r8pwrasvtrpq0m2am3n5zvsgfqwk6' : '';
export const CONTRACT_ABI = AbiRegistry.create(abi);

export const MVX_API_URL = isDev ? 'https://devnet-api.multiversx.com' : 'https://api.multiversx.com';
export const MVX_GATEWAY_URL = isDev ? 'https://devnet-gateway.multiversx.com' : 'https://gateway.multiversx.com';


export const NFT_TOKEN_ID = isDev ? 'RTL-ffcc4e' : '';
export const WEGLD_TOKEN_ID = isDev ? 'WEGLD-a28c59' : '';

export const contracts = {
  'Wrap0': {
    address: isDev ? 'erd1qqqqqqqqqqqqqpgqqkwzsxkjc83vlfex9dmznwm7tjvxlqqkpauqx0n782' : 'erd1qqqqqqqqqqqqqpgqvc7gdl0p4s97guh498wgz75k8sav6sjfjlwqh679jy'
  },
  'Wrap1': {
    address: isDev ? 'erd1qqqqqqqqqqqqqpgqpv09kfzry5y4sj05udcngesat07umyj70n4sa2c0rp' : 'erd1qqqqqqqqqqqqqpgqhe8t5jewej70zupmh44jurgn29psua5l2jps3ntjj3'
  },
  'Wrap2': {
    address: isDev ? 'erd1qqqqqqqqqqqqqpgqvn9ew0wwn7a3pk053ezex98497hd4exqdg0q8v2e0c' : 'erd1qqqqqqqqqqqqqpgqmuk0q2saj0mgutxm4teywre6dl8wqf58xamqdrukln'
  }
};