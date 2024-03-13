/**
 * Configuration to make jest work with TS and TSX file extensitons.
 */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json', }],
  },
  testPathIgnorePatterns: [
    'src/services/localstorage/tests/LocalStorageService.spec.ts',
  ],
};