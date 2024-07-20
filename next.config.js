const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: "remote2", // Cambia el nombre según la aplicación remota
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Pokemon": "./src/components/Atomos/Pokemon2",
        },
        shared: {
          react: {
            singleton: true,
          },
          "react-dom": {
            singleton: true,
          },
        },
      })
    );

    return config;
  },
};
