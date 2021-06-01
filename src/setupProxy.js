const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v0002",
    createProxyMiddleware({
      target: "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame",
      changeOrigin: true,
    })
  );
};
