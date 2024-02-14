import {IndicatorOnOff} from './IndicatorOnOff';
import React, {useState} from 'react';

type OnOffPropsType = {
  volOnOff: boolean
  SetVolOnOff: (volOnOff: boolean) => void
}

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
      <div style={indicator}><IndicatorOnOff onOff={props.volOnOff}/></div>
    </div>
  );
}