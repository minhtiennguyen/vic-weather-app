module.exports = {
  verbose: false,
  browser: true,
  automock: false,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/__test__/**/*.{js}',
    '!src/serviceWorker.js',
    '!src/store/index.js',
    '!src/index.js',
  ],
  setupFiles: ['<rootDir>/setupTest.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)',
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleDirectories: ['node_modules', 'src', 'test'],
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx'],
  coverageReporters: ['json', 'text-summary', 'lcov'],
};
