import {action} from '@storybook/addon-actions';
import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
};

const onClickHandler = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff onChange={onClickHandler} defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff onChange={onClickHandler} defaultOn={false}/>

