import { newSpecPage } from '@stencil/core/testing';
import { Pr0miseAmbulanceWlList } from '../pr0mise-ambulance-wl-list';

describe('pr0mise-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Pr0miseAmbulanceWlList],
      html: `<pr0mise-ambulance-wl-list></pr0mise-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pr0mise-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pr0mise-ambulance-wl-list>
    `);
  });
});
