import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IEmojiPickerProps } from './EmojiPicker.config';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdEmojiEmotions } from 'react-icons/md';

const EmojiPicker: FC<IEmojiPickerProps> = ({ style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<string>();
  const [display, setDisplay] = useState<string>('hidden');

  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    ds.setValue(null, value);
  }, [value]);

  const handleClick = (event: any) => {
    setDisplay('hidden');
    setValue(event.native);
  };

  const setVisibility = () => {
    setDisplay('block');
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className={`emoji-icon flex items-center	`}>
        <span>{value ? value : <MdEmojiEmotions />}</span>
        <IoMdArrowDropdown onClick={setVisibility} className="cursor-pointer" />
      </div>
      <div className={`emoji-picker absolute z-10	${display}`}>
        <Picker data={data} onEmojiSelect={(emoji: any) => handleClick(emoji)} />
      </div>
    </div>
  );
};

export default EmojiPicker;
