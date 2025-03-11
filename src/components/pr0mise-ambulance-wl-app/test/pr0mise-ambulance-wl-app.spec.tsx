import { newSpecPage } from '@stencil/core/testing';
import { Pr0miseAmbulanceWlApp } from '../pr0mise-ambulance-wl-app';

describe('pr0mise-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Pr0miseAmbulanceWlApp],
      html: `<pr0mise-ambulance-wl-app base-path="/"></pr0mise-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("pr0mise-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Pr0miseAmbulanceWlApp],
      html: `<pr0mise-ambulance-wl-app base-path="/ambulance-wl/"></pr0mise-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("pr0mise-ambulance-wl-list");
  });
});