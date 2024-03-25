import * as React from 'react';
import {useState} from 'react';
import {MySelect} from './MySelect';

export default {
  title: 'Select'
}

export const WithItem = () => {
  const items = [
    {title: 'Vladimir', value: 0},
    {title: 'Krasnodar', value: 1},
    {title: 'Moscow', value: 2},
    {title: 'New-York', value: 3},
    {title: 'Alicante', value: 4},
  ]
  const [value, setValue] = useState(0)


  return <MySelect value={value} items={items} onChange={(val) => setValue(val)}/>
}

export const WithoutItem = () => {
  const items = [
    {title: 'Vladimir', value: 0},
    {title: 'Krasnodar', value: 1},
    {title: 'Moscow', value: 2},
    {title: 'New-York', value: 3},
    {title: 'Alicante', value: 4},
  ]
  const [value, setValue] = useState<number | null>(null)


  return <MySelect value={value} items={items} onChange={(val) => setValue(val)}/>
}
