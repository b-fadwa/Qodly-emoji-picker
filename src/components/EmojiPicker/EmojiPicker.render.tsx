import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';

import { IEmojiPickerProps } from './EmojiPicker.config';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { IoMdArrowDropdown } from 'react-icons/io';

const EmojiPicker: FC<IEmojiPickerProps> = ({ style, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState<string>();
  const [displayValue, setDisplayValue] = useState<string>('hidden');
  const [display, setDisplay] = useState<string>('block');

  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    ds.setValue(null, value);
  }, [value]);

  const handleClick = (event: any) => {
    setDisplayValue('block');
    setDisplay('hidden');
    setValue(event.native);
  };

  const setVisibility = () => {
    setDisplayValue('hidden');
    setDisplay('block');
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className={`emoji-icon ${displayValue} flex items-center	`}>
        <span>{value && value}</span>
        <IoMdArrowDropdown onClick={setVisibility} className="cursor-pointer" />
      </div>
      <div className={`emoji-picker ${display}`}>
        <Picker data={data} onEmojiSelect={(emoji: any) => handleClick(emoji)} />
      </div>
    </div>
  );
};

export default EmojiPicker;
