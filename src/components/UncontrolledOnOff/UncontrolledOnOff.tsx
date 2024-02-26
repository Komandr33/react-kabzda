import React, {useState} from 'react';

type OnOffProps = {
  onChange: (volOnOff: boolean) => void,
  defaultOn?: boolean
}

export function UncontrolledOnOff(props: OnOffProps) {

  const [val, SetVal] = useState(props.defaultOn ? props.defaultOn : false)

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
      <span style={indicator}></span>
    );
  }

  return (
    <div>
      <div style={onStyle} onClick={() => {
        SetVal(true)
        props.onChange(true)
      }}>On
      </div>
      <div style={offStyle} onClick={() => {
        SetVal(false)
        props.onChange(false)
      }}>Off
      </div>
      <IndicatorOnOff indicator={val}/>
    </div>
  );
}


