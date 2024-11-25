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
  const [isVisible, setVisible] = useState<boolean>(false);

  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;
    const listener = async (/* event */) => {
      const v = await ds.getValue<string>();
      setValue(v || '');
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
  }, [ds]);

  useEffect(() => {
    ds.setValue(null, value);
  }, [value]);

  const handleClick = (event: any) => {
    setVisible((prev) => !prev);
    setValue(event.native);
  };

  const setVisibility = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <div className={`emoji-icon flex items-center	`}>
        <span>{value ? value : <MdEmojiEmotions />}</span>
        <IoMdArrowDropdown onClick={setVisibility} className="cursor-pointer" />
      </div>
      {isVisible && (
        <div className={`emoji-picker absolute z-10`}>
          <Picker data={data} onEmojiSelect={(emoji: any) => handleClick(emoji)} />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
