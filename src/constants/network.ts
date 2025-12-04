import { BackEndNetworkType, NetworkItem } from '@/types/network';
import { NEXT_PUBLIC_NETWORK_ENV, NEXT_PUBLIC_WEBSITE_NAME } from './misc';

export type WebsiteNetworkConfig = {
  [key in BackEndNetworkType]: NetworkItem;
};

export const BackEndNetWorkMap: Record<string, WebsiteNetworkConfig> = {
  Awaken: {
    dev: {
      cmsUrl: 'https://test-cms-v2.awaken.finance/',
      s3Url: 'https://awaken-cms-testnet.s3.ap-northeast-1.amazonaws.com/',
    },
    mainnet: {
      cmsUrl: 'https://cms-v2.awaken.finance/',
      s3Url: 'https://awaken-cms-mainnet.s3.ap-northeast-1.amazonaws.com/',
    },
  },
  // Add More ...
};

export const s3Url =
  NEXT_PUBLIC_WEBSITE_NAME && NEXT_PUBLIC_NETWORK_ENV
    ? BackEndNetWorkMap[NEXT_PUBLIC_WEBSITE_NAME][NEXT_PUBLIC_NETWORK_ENV]?.s3Url
    : '';
