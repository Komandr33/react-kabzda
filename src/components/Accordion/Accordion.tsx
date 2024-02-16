import React from 'react';

type  AccordionPropsType = {
  title: string
  collapsed: boolean
  callbackCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {
  return <div>
    <AccordionTitle t={props.title} callbackCollapsed={props.callbackCollapsed}/>
    {!props.collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlePropsType = {
  t: string
  callbackCollapsed: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

  return <h3 onClick={()=>props.callbackCollapsed()}>--- {props.t} ---</h3>
}

export function AccordionBody() {

  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>);
}
