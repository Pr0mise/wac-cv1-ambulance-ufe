import { newE2EPage } from '@stencil/core/testing';

describe('pr0mise-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pr0mise-ambulance-wl-editor></pr0mise-ambulance-wl-editor>');

    const element = await page.find('pr0mise-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
