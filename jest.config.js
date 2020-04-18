// MIT License
// https://github.com/ashitaka-emishi/turbo-barnacle/blob/master/LICENSE
//
// Copyright (c) 2020 Emishi Ashitaka

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.scss$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: [
    "cypress",
  ],
};
