import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';
import React, {useState} from 'react';

export default {
  title: 'OnOff',
  component: OnOff,
};

const onClickHandler = action('on or off clicked')

export const OnMode = () => <OnOff volOnOff={true} SetVolOnOff={onClickHandler}/>

export const OffMode = () => <OnOff volOnOff={false} SetVolOnOff={onClickHandler}/>

export const OnOffDemo = () => {
  const [value, setValue] = useState(true)
  return (
    <OnOff volOnOff={value} SetVolOnOff={setValue}/>
  )
}