/* eslint-disable import/extensions */
import config from './jest.config';

export default {
  ...config,
  testMatch: ['**/?(*-int.)+(spec|test).[jt]s?(x)'],
};
