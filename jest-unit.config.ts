/* eslint-disable import/extensions */
import config from './jest.config';

export default {
  ...config,
  testMatch: ['**/?(*-unit.)+(spec|test).[jt]s?(x)'],
};
