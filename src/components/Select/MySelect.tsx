import {FC, KeyboardEvent, useEffect, useState} from 'react';
import s from './MySelect.module.css'

export type ItemType = {
  title: string,
  value: any
}

type SelectPropsType = {
  value?: number | null,
  items: ItemType[]
  onChange: (val: number) => void
}

export const MySelect: FC<SelectPropsType> = ({value, onChange, items}) => {

  const [collapsed, setCollapsed] = useState(false)
  const [hoveredValue, setHoveredValue] = useState(value) // хранит value элемента над которым мышь

  const item = items.find(el => el.value === value)
  const hoveredElement = items.find(el => el.value === hoveredValue)

  useEffect(() => {
    setHoveredValue(value)
  }, [value])

  const OnSpanClickHandler = () => setCollapsed(!collapsed)
  const OnItemClickHandler = (val: number) => {
    onChange(val)
    OnSpanClickHandler();
  }
  const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { // если нажатая/отпущена клавиша 'вверх' или 'вниз'
      for (let i = 0; i < items.length; i++) { // запусти цикл по items
        if (hoveredValue === items[i].value) { // если hoveredValue === value выбранного эл-та
          const pretendentElement = e.key === 'ArrowDown'
            ? items[i + 1]   // хранит следующий эл-т
            : items[i - 1]   // хранит предыдущий эл-т
          if (pretendentElement) { // обрабатываю ошибку крайнего элемента (если ниже/выше по списку кто-то есть, то...)
            onChange(pretendentElement.value) // передаю значение предыдущего/следующего эл-та 'родителю'
            return;
          }
        }
      }
      if (!item) {  // Если item не пришёл (т.е. если изначально ни один вариант не выбран(value === null))
        onChange(items[0].value) // сделай выбранным первого в списке, чтобы можно было двигать стрелками
      }
    }
    if (e.key === 'Escape' || e.key === 'Enter') {
      setCollapsed(false)
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
              onMouseEnter={() => setHoveredValue(i.value)} // считывает над каким элементом мышь
              onClick={() => OnItemClickHandler(i.value)
              }>
              {i.title}
            </div>)}
          </div>
      }
    </div>
  </>
}
