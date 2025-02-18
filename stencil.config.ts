import { Config } from '@stencil/core';

export const config: Config = {
  globalScript: 'src/global/app.ts',
  namespace: 'waiting-list',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "shell",
    //browserExecutablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
  },
};
