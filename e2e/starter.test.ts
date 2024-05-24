import { expect } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(
      element(by.text('Este é um grafico em tempo real')),
    ).toBeVisible();
  });

  it('should show hello from profile scree', async () => {
    await element(by.id('profile-screen')).tap();
    await expect(
      element(by.text('Hello word, esta é a pagina de perfil')),
    ).toBeVisible();
  });
});
