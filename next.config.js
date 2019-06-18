module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/talent-sonar": { page: "/talent-sonar" },
      "/koeo": { page: "/koeo" },
      "/ballot-ready": { page: "/archived/ballot-ready" },
      "/lawyer-exchange": { page: "/lawyer-exchange" },
      "/luna-lights": { page: "/archived/luna-lights" },
      "/past-media": { page: "/archived/past-media" },
      "/404": { page: "/__404" },
      "/error": { page: "/__error" }
    };
  }
};
