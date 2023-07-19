import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_ariakedark_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_materialdarker_theme:plugin',
  description: 'A material darker Jupyterlab theme extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
      'JupyterLab extension jupyterlab_materialdarker_theme is activated!'
    );
    const style = 'jupyterlab_materialdarker_theme/index.css';

    manager.register({
      name: 'jupyterlab_materialdarker_theme',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
