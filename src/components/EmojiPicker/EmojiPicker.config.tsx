import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdEmojiEmotions } from 'react-icons/md';

import EmojiPickerSettings, { BasicSettings } from './EmojiPicker.settings';

export default {
  craft: {
    displayName: 'EmojiPicker',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(EmojiPickerSettings, BasicSettings),
    },
  },
  info: {
    settings: EmojiPickerSettings,
    displayName: 'EmojiPicker',
    exposed: true,
    icon: MdEmojiEmotions,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    style: { width: 'fit-content' },
  },
} as T4DComponentConfig<IEmojiPickerProps>;

export interface IEmojiPickerProps extends webforms.ComponentProps {}
