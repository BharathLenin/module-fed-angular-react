const deps = require("./package.json").dependencies;

module.exports = {
  name: "remote",
  exposes: {
    "./DonutChart": "./src/components/DonutChart",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
