import * as React from 'react';
import {useState} from 'react';
import {ItemType, MySelect} from './MySelect';

export default {
  title: 'select'
}

// export type ValueType = 'none'| 'Krasnodar' | 'Moscow' | 'New-York' | 'Alicante'

export const Select = () => {

    const [item, setItem] = useState<ItemType>({title: '', value: 0})

  const onChangeHandler = (val: number) => {
      // debugger
    let newItem = items.find(el => el.value === val )
    if (newItem) {
      setItem({...newItem})
    }
    console.log(val)
  }
  const items = [
    {title: '', value: 0},
    {title: 'Krasnodar', value: 1},
    {title: 'Moscow', value: 2},
    {title: 'New-York', value: 3},
    {title: 'Alicante', value: 4},
  ]
  return <MySelect value={item.title} onChange={onChangeHandler} items={items}/>
}