module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = [
      './src/index.ts'
    ]

    config.resolve = {
      extensions: [".ts", ".js", ".json"]
    };

    config.module.rules.push(
      {
        test: /\.ts$/,
        loader: 'lodash-ts-imports-loader',
        exclude: /node_modules/,
        enforce: "pre"
      },
      {
        test: /^(?!.*\.spec\.tsx?$).*\.tsx?$/,
        loader: 'ts-loader',
      },
    );

    return config
  }
}