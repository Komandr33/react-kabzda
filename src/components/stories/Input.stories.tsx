import {ChangeEvent, useRef, useState} from 'react';

export default {
  title: 'Input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }
  return <><input onChange={onChange}/> value input: {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onClick = () => {
    const refValue = inputRef.current as HTMLInputElement
    setValue(refValue.value)
  }

  return <>
    <input ref={inputRef}/>
    <button onClick={onClick}> click to save</button>
    saved value: {value}</>
}


export const ControlledInput = () => {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return <><input value={value} onChange={onChange}/> value input: {value}</>
}

export const ControlledCheckbox = () => {
  const [value, setValue] = useState<boolean>(false)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)

  }
  return <>
    <input type="checkbox" checked={value} onChange={onChange}/> value state of checkbox: {String(value)}</>
}

export const ControlledSelect = () => {
  const [selectValue, setSelectValue] = useState<string>('1')
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value)

  }
  return (
    <select value={selectValue} onChange={onChange}>
      <option value={'1'}>Krasnodar</option>
      <option value={'3'}>Vladimir</option>
      <option value={'4'}>Moscow</option>
      <option value={'5'}>California</option>
      <option value={'2'}>Alicante</option>
    </select>
  )
}