// Default runtime config for local dev. Replace or override as needed.

window.runtimeConfig = {
  VITE_API_URL: "http://localhost:8080/api", // Example backend API
  VITE_API_END_POINT: "http://localhost:8080/api",
  VITE_CORE_API_END_POINT: "http://localhost:8080/api",
  VITE_API_NOTIFICATIONS_END_POINT: "http://localhost:8080/api/notifications",
  VITE_UPLOAD_API_END_POINT: "http://localhost:8080/api/upload",
  VITE_WEB3_API_END_POINT: "http://localhost:8080/api/web3",
  VITE_API_LOYALITY_END_POINT: "http://localhost:8080/api/loyalty",
  VITE_IPSTACK_API: "https://api.ipstack.com/",
  VITE_IPSTACK_ACCESS_KEY: "your_ipstack_access_key",
  VITE_WALLET_TYPE: "custodial", // or 'noncustodial' as needed
  NODE_ENV: "development",
  MODE: "development"
};


