export const constants = {
  DOMAIN: process.env.REACT_APP_DOMAIN,
}

export const screenSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
}

export const device = {
  mobileS: `(max-width: ${screenSizes.mobileS}px)`,
  mobileM: `(max-width: ${screenSizes.mobileM}px)`,
  mobileL: `(max-width: ${screenSizes.mobileL}px)`,
  tablet: `(max-width: ${screenSizes.tablet}px)`,
  laptop: `(max-width: ${screenSizes.laptop}px)`,
  laptopL: `(max-width: ${screenSizes.laptopL}px)`,
};