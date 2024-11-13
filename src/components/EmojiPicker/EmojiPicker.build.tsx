import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IEmojiPickerProps } from './EmojiPicker.config';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdEmojiEmotions } from 'react-icons/md';

const EmojiPicker: FC<IEmojiPickerProps> = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className={`emoji-icon  flex items-center	`}>
        <span>
          <MdEmojiEmotions />
        </span>
        <IoMdArrowDropdown className="cursor-pointer" />
      </div>
    </div>
  );
};

export default EmojiPicker;
