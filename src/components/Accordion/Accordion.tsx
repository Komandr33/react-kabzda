import React, {memo} from 'react';

type  AccordionPropsType = {
  title: string
  collapsed: boolean
  callbackCollapsed: () => void
}

export const Accordion = (props: AccordionPropsType) => {

  return <div>
    <AccordionTitleMemo title={props.title} callbackCollapsed={props.callbackCollapsed}/>
    {!props.collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlePropsType = {
  title: string
  callbackCollapsed: () => void
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
const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3 onClick={() => props.callbackCollapsed()}>--- {props.title} ---</h3>
}
const AccordionTitleMemo = memo(AccordionTitle);