import React from 'react';

type RatingPropsType = {
  value: ValueType
  setRating: (rating: ValueType) => void
}

type StarPropsType = {
  selected: boolean
  setRating: () => void
}

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export function Rating(props: RatingPropsType) {

  return (
    <div>
      <button onClick={() => props.setRating(0)}>reset rating</button>
      <br/>
      <Star selected={props.value > 0} setRating={()=> props.setRating(1)}/>
      <Star selected={props.value > 1} setRating={()=> props.setRating(2)}/>
      <Star selected={props.value > 2} setRating={()=> props.setRating(3)}/>
      <Star selected={props.value > 3} setRating={()=> props.setRating(4)}/>
      <Star selected={props.value > 4} setRating={()=> props.setRating(5)}/>
    </div>
  );

  function Star(props: StarPropsType) {
    return <span onClick={props.setRating}>
      {props.selected ? <b>star </b> : 'star '}
    </span>
  }
}
