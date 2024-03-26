import React, {memo} from 'react';

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
      <StarMemo selected={props.value > 0} setRating={() => props.setRating(1)}/>
      <StarMemo selected={props.value > 1} setRating={() => props.setRating(2)}/>
      <StarMemo selected={props.value > 2} setRating={() => props.setRating(3)}/>
      <StarMemo selected={props.value > 3} setRating={() => props.setRating(4)}/>
      <StarMemo selected={props.value > 4} setRating={() => props.setRating(5)}/>
    </div>
  );
}

function Star(props: StarPropsType) {
  return <span onClick={props.setRating}>
      {props.selected ? <b>star </b> : 'star '}
    </span>
}

const StarMemo = memo(Star)
