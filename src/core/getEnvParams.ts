export function getEnvParams() {
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';

  const baseAPI = process.env.REACT_APP_API_URL;
  const reportsAPI = process.env.REACT_APP_REPORTS_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  return {
    isProduction,
    isDevelopment,
    baseAPI,
    reportsAPI,
    apiKey,
  };
}
