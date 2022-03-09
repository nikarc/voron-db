export enum WINDOW_SIZES {
  tablet = 768,
  desktop = 1024,
  largeDesktop = 1260,
  xLargeDesktop = 1440,
  giantDesktop = 1600,
}

const customMediaQuery = (width: number, mobileFirst: boolean = true) =>
  `@media (${mobileFirst ? "min" : "max"}-width: ${width}px)`;

export const media = {
  custom: customMediaQuery,
  phone: customMediaQuery(WINDOW_SIZES.tablet, false),
  tablet: customMediaQuery(WINDOW_SIZES.tablet),
  mobile: customMediaQuery(WINDOW_SIZES.desktop, false),
  desktop: customMediaQuery(WINDOW_SIZES.desktop),
  maxTablet: customMediaQuery(WINDOW_SIZES.desktop, false),
  minTablet: customMediaQuery(WINDOW_SIZES.tablet),
  minDesktop: customMediaQuery(WINDOW_SIZES.desktop),
  largeDesktop: customMediaQuery(WINDOW_SIZES.largeDesktop),
  maxLargeDesktop: customMediaQuery(WINDOW_SIZES.largeDesktop, false),
  giantDesktop: customMediaQuery(WINDOW_SIZES.giantDesktop),
};
