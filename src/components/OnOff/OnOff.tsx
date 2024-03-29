import React, {memo} from 'react';

type OnOffPropsType = {
  volOnOff: boolean
  SetVolOnOff: (volOnOff: boolean) => void
}
type IndicatorOnOffType = {
  indicator: boolean
}

export const IndicatorOnOff = (props: IndicatorOnOffType) => {
  return (
    <span className={props.indicator ? 'indicatorOn' : 'indicatorOff'}></span>
  );
}
const OnOffMemo = memo(IndicatorOnOff)
export function OnOff(props: OnOffPropsType) {

  const onStyle = {
    width: '30px',
    height: '20px',
    margin: '2px',
    padding: '2px',
    border: '1px solid black',
    display: 'inline-block',
    background: props.volOnOff ? 'green' : 'white'
  }
  const offStyle = {
    width: '30px',
    height: '20px',
    margin: '2px',
    padding: '2px',
    border: '1px solid black',
    display: 'inline-block',
    background: props.volOnOff ? 'white' : 'red'
  }
  const indicator = {
    width: '10px',
    height: '10px',
    margin: '2px',
    marginLeft: '2px',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'inline-block',
    background: props.volOnOff ? 'green' : 'red'
  }

  return (
    <div>
      <div style={onStyle} onClick={() => props.SetVolOnOff(true)}>On</div>
      <div style={offStyle} onClick={() => props.SetVolOnOff(false)}>Off</div>
      <div style={indicator}><OnOffMemo indicator={props.volOnOff}/></div>
    </div>
  );
}