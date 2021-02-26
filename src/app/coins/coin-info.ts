export interface CoinInfo {
  name: string;
  categories?: string[];
  description?;//.es
  country_origin?: string;
  market_data?;//.current_price
  links?;//.homepage[0]

}
