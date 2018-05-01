const jestConfig = {
  moduleFileExtensions: [
    'js',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue',
  ],
};

if (process.env.test === 'e2e') {
  jestConfig.globalSetup = './puppeteer_setup.js';
  jestConfig.globalTeardown = './puppeteer_teardown.js';
  jestConfig.testEnvironment = './puppeteer_env.js';
}

module.exports = jestConfig;
