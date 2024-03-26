import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiUrl: 'http://localhost:4200',
  baseUrl: 'https://cloudshop-zeta.vercel.app'
};
