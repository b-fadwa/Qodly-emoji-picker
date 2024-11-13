import config, { IEmojiPickerProps } from './EmojiPicker.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './EmojiPicker.build';
import Render from './EmojiPicker.render';

const EmojiPicker: T4DComponent<IEmojiPickerProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

EmojiPicker.craft = config.craft;
EmojiPicker.info = config.info;
EmojiPicker.defaultProps = config.defaultProps;

export default EmojiPicker;
