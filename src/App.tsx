import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import {Rating, ValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/Accordion/UncontrolledAccordion';


function App() {

  const [accordionCollapsed, setAccordionCollapsed] = useState(true)
  const [rating, setRating] = useState<ValueType>(0)
  const [volOnOff, SetVolOnOff] = useState<boolean>(false)

  return (
    <div className={'App'}>
      <Accordion title={'ckick me-2'} collapsed={accordionCollapsed} callbackCollapsed={()=>setAccordionCollapsed(!accordionCollapsed)}/>
      <UncontrolledAccordion title={'click me'}/>
      <UncontrolledOnOff onOff={SetVolOnOff}/>{volOnOff.toString()}
      <OnOff volOnOff={volOnOff} SetVolOnOff={SetVolOnOff}/>
      <Rating value={rating} setRating={setRating}/>
      {/*<UncontrolledRating />*/}

    </div>
  );
}

export default App;