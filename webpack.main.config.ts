import type { Configuration } from "webpack";
import { rules } from "./webpack.rules";

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/index.ts",
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
  stats: {
    warnings: false,
    errorDetails: true,
  },
  externals: {
    sqlite3: 'commonjs2 sqlite3'
  }
  // externals: ['sqlite3']
};
