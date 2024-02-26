import {action} from '@storybook/addon-actions';
import React from 'react';
import {UncontrolledRating} from './UncontrolledRating';

export default {
  title: 'UncontrolledRating',
  component: UncontrolledRating,
};

const onClickHandler = action('rating changed inside component')

export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={onClickHandler}/>
export const RatingStatus1 = () => <UncontrolledRating defaultValue={1} onChange={onClickHandler}/>
export const RatingStatus2 = () => <UncontrolledRating defaultValue={2} onChange={onClickHandler}/>
export const RatingStatus3 = () => <UncontrolledRating defaultValue={3} onChange={onClickHandler}/>
export const RatingStatus4 = () => <UncontrolledRating defaultValue={4} onChange={onClickHandler}/>
export const RatingStatus5 = () => <UncontrolledRating defaultValue={5} onChange={onClickHandler}/>

