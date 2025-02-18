import { newE2EPage } from '@stencil/core/testing';

describe('pr0mise-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pr0mise-ambulance-wl-list></pr0mise-ambulance-wl-list>');

    const element = await page.find('pr0mise-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
