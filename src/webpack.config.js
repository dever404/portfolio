module.exports = {
    module: {
      rules: [
        {
          test: /\.json5$/i,
          loader: 'json5-loader',
          type: 'javascript/auto',
        },
      ],
    },
};
  