import {IndicatorOnOff} from './IndicatorOnOff';
import React, {useState} from 'react';

type OnOffProps ={
  onOff: (volOnOff: boolean) => void
}

export function UncontrolledOnOff(props: OnOffProps) {

  let [val, SetVal] =useState(false)

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

  return (
    <div>
      <div style={onStyle} onClick={() => {
        SetVal(true)
        props.onOff(true)
      }}>On</div>
      <div style={offStyle} onClick={() => {
        SetVal(false)
        props.onOff(false)
      }}>Off</div>
      <div style={indicator}><IndicatorOnOff onOff={val}/></div>
    </div>
  );
}