import React, {useState} from 'react';
import {MySelectMemo} from './MySelect';
import {SelectVariantsMemo} from './Select';

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


  return <MySelectMemo value={value} items={items} onChange={(val) => setValue(val)}/>
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


  return <MySelectMemo value={value} items={items} onChange={(val) => setValue(val)}/>
}

export const Select  = () => {
  return <SelectVariantsMemo/>
}
