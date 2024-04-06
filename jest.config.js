module.exports = {
    preset: 'jest-puppeteer',
    setupFilesAfterEnv: ['./__tests__/setupTests.js'],
    testMatch: ['./__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['./node_modules/', './dist/', './build/'],
  };