import {action} from '@storybook/addon-actions';
import {OnOff} from './OnOff';
import React, {useState} from 'react';

export default {
  title: 'OnOff',
  component: OnOff,
};

const onClickHandler = action('onClick')

export const OnMode = () => {
  return (
    <OnOff volOnOff={true} SetVolOnOff={onClickHandler}/>
  )
}

export const OffMode = () => {
  return (
    <OnOff volOnOff={false} SetVolOnOff={onClickHandler}/>
  )
}

export const OnOffDemo = () => {

  const [value, setValue] = useState(true)

  return (
    <OnOff volOnOff={value} SetVolOnOff={setValue}/>
  )
}