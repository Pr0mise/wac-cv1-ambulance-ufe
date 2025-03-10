import { newSpecPage } from '@stencil/core/testing';
import { Pr0miseAmbulanceWlList } from '../pr0mise-ambulance-wl-list';

describe('pr0mise-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Pr0miseAmbulanceWlList],
      html: `<pr0mise-ambulance-wl-list></pr0mise-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as Pr0miseAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
