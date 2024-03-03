import {FC, KeyboardEvent, useState} from 'react';
import s from './MySelect.module.css'

export type ItemType = {
  title: string,
  value: any
}

type SelectPropsType = {
  value: any,
  items: ItemType[]
  onChange: (val: any) => void
}

export const MySelect: FC<SelectPropsType> = ({value, onChange, items}) => {

  const [collapsed, setCollapsed] = useState(false)
  const [hoveredValue, setHoveredValue] = useState(value)

  const item = items.find(el => el.value === value)
  const hoveredElement = items.find(el => el.value === hoveredValue)

  const OnSpanClickHandler = () => setCollapsed(!collapsed)

  const OnItemClickHandler = (val: number) => {
    onChange(val)
    OnSpanClickHandler();
  }

  const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].value === hoveredValue) {
        if (items[i + 1]) {
          onChange(items[i + 1].value)
          break;
        }
      }
    }
  }

  return <>
    <div
      className={s.select}
      tabIndex={0}
      // onBlur={() => setCollapsed(false)}
      onKeyUp={onKeyUpHandler}
    >
      <span className={s.main} onClick={OnSpanClickHandler}>
        {item && item.title}
      </span>
      {
        collapsed &&
          <div className={s.items}>
            {items.map(i => <div
              className={s.item + ' ' + (hoveredElement === i ? s.selected : '')}
              key={i.value}
              onMouseEnter={() => setHoveredValue(i.value)}
              onClick={() => OnItemClickHandler(i.value)
              }>
              {i.title}
            </div>)}
          </div>
      }
    </div>
  </>
}
