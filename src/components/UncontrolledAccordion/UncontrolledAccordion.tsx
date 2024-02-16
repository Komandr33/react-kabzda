import React, {useState} from 'react';

type  AccordionPropsType = { title: string }

export function UncontrolledAccordion(props: AccordionPropsType) {

  const [collapsed, setCollapsed] = useState(true)

  return <div onClick={() => setCollapsed(!collapsed)}>
    <AccordionTitle t={props.title}/>
    {!collapsed && <AccordionBody/>}
  </div>
}

type AccordionTitlePropsType = { t: string }

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>--- {props.t} ---</h3>
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

