module.exports = {
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.js', '!src/js/mocks/**/*'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    '^.+\\.js$': 'babel-jest',
  },
}
