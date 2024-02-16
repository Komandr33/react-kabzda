import React, {useState} from 'react';


export function UncontrolledOnOff() {

  const [val, SetVal] = useState(false)

  const onStyle = {
    width: '30px',
    height: '20px',
    margin: '2px',
    padding: '2px',
    border: '1px solid black',
    display: 'inline-block',
    background: val ? 'green' : 'white'
  }
  const offStyle = {
    width: '30px',
    height: '20px',
    margin: '2px',
    padding: '2px',
    border: '1px solid black',
    display: 'inline-block',
    background: val ? 'white' : 'red'
  }
  const indicator = {
    width: '10px',
    height: '10px',
    margin: '2px',
    marginLeft: '2px',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'inline-block',
    background: val ? 'green' : 'red'
  }

  type IndicatorOnOffType = {
    indicator: boolean
  }

  function IndicatorOnOff(props: IndicatorOnOffType) {
    return (
      <span className={props.indicator ? 'indicatorOn' : 'indicatorOff'}></span>
    );
  }

  return (
    <div>
      <h3>Uncontrolled</h3>
      <div style={onStyle} onClick={() => {SetVal(true)}}>On-</div>

      <div style={offStyle} onClick={() => {SetVal(false)}}>Off-</div>

      <div style={indicator}><IndicatorOnOff indicator={val}/></div>
    </div>
  );
}


