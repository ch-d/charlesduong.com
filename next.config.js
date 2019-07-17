const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/finance": { page: "/finance" },
      "/talent-sonar": { page: "/talent-sonar" },
      "/lawyer-exchange": { page: "/lawyer-exchange" },
      "/roc": { page: "/roc" },
      "/bemore": { page: "/bemore" },
      "/koeo": { page: "archived/koeo" },
      "/ballot-ready": { page: "/archived/ballot-ready" },
      "/luna-lights": { page: "/archived/luna-lights" },
      "/past-media": { page: "/archived/past-media" },
      "/404": { page: "/404" },
      "/error": { page: "/404" }
    };
  }
});
