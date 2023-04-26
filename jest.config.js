module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "single-spa-react/parcel": "single-spa-react/lib/cjs/parcel.cjs",
    "^.+\\.(svg)$": "<rootDir>/__mocks__/svg.ts",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
};
