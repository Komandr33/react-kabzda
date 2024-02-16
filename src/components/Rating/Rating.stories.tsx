import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {Rating, ValueType} from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

const onClickHandler = action('onClick')

export const EmptyRating = () => {
  return <Rating value={0} setRating={onClickHandler}/>
}
export const RatingStatus1 = () => {
  return <Rating value={1} setRating={onClickHandler}/>
}
export const RatingStatus2 = () => {
  return <Rating value={2} setRating={onClickHandler}/>
}
export const RatingStatus3 = () => {
  return <Rating value={3} setRating={onClickHandler}/>
}
export const RatingStatus4 = () => {
  return <Rating value={4} setRating={onClickHandler}/>
}
export const RatingStatus5 = () => {
  return <Rating value={5} setRating={onClickHandler}/>
}
export const RatingDemo = () => {
  const [value, setValue] = useState<ValueType>(0)
  return <Rating value={value} setRating={setValue}/>
}
