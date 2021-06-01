const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/steam",
    createProxyMiddleware({
      target:
        "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002",
      changeOrigin: true,
    })
  );
};
