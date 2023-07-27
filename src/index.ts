import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_ariakedark_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_midnightsea_theme:plugin',
  description: 'A dark blue and purple Jupyterlab theme extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
      'JupyterLab extension jupyterlab_midnightsea_theme is activated!'
    );
    const style = 'jupyterlab_midnightsea_theme/index.css';

    manager.register({
      name: 'Midnight Sea',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
