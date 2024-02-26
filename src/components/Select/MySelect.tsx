import {FC, useState} from 'react';

export type ItemType = {
  title: string,
  value: any
}

type SelectPropsType = {
  value: any,
  onChange: (val: number,) => void,
  items: ItemType[]
}

export const MySelect: FC<SelectPropsType> = ({value, onChange, items}) => {

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onclickHandler = () => {
    setCollapsed(!collapsed)
  }

  return <div>
    <div
      onClick={onclickHandler} /*tabIndex={0} onBlur={() => setCollapsed(false)}*/ style={{ width: '100px', borderBlockEnd: '1px solid',writingMode: 'horizontal-tb'}} >{value}</div>
    <ul style={{listStyleType: 'none'}}>
      {collapsed && items.map((item, i) =>
        <Option
          key={i}
          item={item.title}
          onChange={onChange}
          value={item.value}
          collapsed={setCollapsed}
        />)}
    </ul>
  </div>
}

type OptionPropsType = {
  item: string,
  onChange: (val: number,) => void,
  value: number,
  collapsed: (collapsed: boolean) => void
}
const Option = (props: OptionPropsType) => {

  const OptionClickHandler = () => {
    props.onChange(props.value);
    props.collapsed(false)
  }
  return <li onClick={OptionClickHandler}>
    {props.item}
  </li>
}