module.exports = ({ env }) => ({
    url: env("https://nytt-strapi.herokuapp.com/"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["Key1", "Key2"]),
    },
  });