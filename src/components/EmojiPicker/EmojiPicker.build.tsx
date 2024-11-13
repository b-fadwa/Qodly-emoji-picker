import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { IEmojiPickerProps } from './EmojiPicker.config';

const EmojiPicker: FC<IEmojiPickerProps> = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
       <Picker data={data}/>
    </div>
  );
};

export default EmojiPicker;