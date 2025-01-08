export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!your-package-to-transform|another-package).+\\.js$',
  ],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
