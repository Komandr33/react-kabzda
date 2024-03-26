import React, {memo, useState} from 'react';

type  AccordionPropsType = { title: string }

export const UncontrolledAccordion = (props: AccordionPropsType) => {

  const [collapsed, setCollapsed] = useState(true)

  return <div onClick={() => setCollapsed(!collapsed)}>
    <AccordionTitleMemo title={props.title}/>
    {!collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlePropsType = { title: string }
const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3>--- {props.title} ---</h3>
}
const AccordionBody = () => {
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>);
}
const AccordionTitleMemo = memo(AccordionTitle);
