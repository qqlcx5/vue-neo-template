export interface ConfigTyps {
  env: string;
  invitationCodeCatchName: string;
  localCityCatchName: string;
  homeCityCatchName: string;
  platformType: number;
  gzhOpenIdCatchName: string;
  fullPageCatch: string;
  shareParentName: string;
  shareOriginName: string;
  priceNullText: string;
  stockNullText: string;
  uuidCatchName: string;
  /**
   * @example 白名单
   */
  forceLoginWhite: Array<string>;
  /**
   * @example 埋点白名单
   */
  trajectoryWhite: Array<string>;
  loginQueryCatchName: string;
  shareBusinessCardName: string;
  firstIntPageCatchName: string;
  curApiCatch: string;
}
