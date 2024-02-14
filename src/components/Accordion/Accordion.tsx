import React from 'react';

type  AccordionPropsType = {
  title: string
  collapsed: boolean
  callbackCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {
  return <div>
    <AccordionTitle t={props.title} callbackCollapsed={props.callbackCollapsed}/>
    {!props.collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlePropsType = {
  t: string
  callbackCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

  return <h3 onClick={props.callbackCollapsed}>--- {props.t} ---</h3>
}

function AccordionBody() {

  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>);
}

export default Accordion;