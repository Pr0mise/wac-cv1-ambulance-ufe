import { newE2EPage } from '@stencil/core/testing';

describe('pr0mise-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pr0mise-ambulance-wl-app></pr0mise-ambulance-wl-app>');

    const element = await page.find('pr0mise-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
