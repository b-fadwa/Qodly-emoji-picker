import { ESetting, TSetting } from '@ws-ui/webform-editor';
import { BASIC_SETTINGS, DEFAULT_SETTINGS, load } from '@ws-ui/webform-editor';

const commonSettings: TSetting[] = [
  {
    key: 'theme',
    label: 'Theme',
    type: ESetting.SELECT,
    options: [
      {
        label: 'Light',
        value: 'light',
      },
      {
        label: 'Dark',
        value: 'dark',
      },
    ],
    defaultValue: 'light',
  },
  {
    key: 'navPosition',
    label: 'Nav position',
    type: ESetting.SELECT,
    options: [
      {
        label: 'Top',
        value: 'top',
      },
      {
        label: 'Bottom',
        value: 'bottom',
      },
      {
        label: 'None',
        value: 'none',
      },
    ],
    defaultValue: 'top',
  },
];

const Settings: TSetting[] = [
  {
    key: 'properties',
    label: 'Properties',
    type: ESetting.GROUP,
    components: commonSettings,
  },
  ...DEFAULT_SETTINGS,
];

export const BasicSettings: TSetting[] = [
  ...commonSettings,
  ...load(BASIC_SETTINGS).filter('style.overflow'),
];

export default Settings;
