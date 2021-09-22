const {
  location: { origin, host },
} = window;

export const API_ADDRESS =
  process.env.REACT_APP_API_ADDRESS ||
  `${
    /^localhost+/.test(host) ? `http://apache-tech.3322.org:7779` : origin
  }/xpros`;

export const ENV_TYPE = {
  DEVELOPMENT: 'DEVELOPMENT',
  PRODUCTION: 'PRODUCTION',
};

export const APP_ENV = ENV_TYPE.PRODUCTION;
