function index(req, res) {
  res.json({
    message: "Welcome to RetroSpec!",
    documentation_url: "https://github.com/JsonLitz/RetroSpec",
    base_url: "https://murmuring-wave-47459.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
