import React, {useReducer, useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, ValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {accordionReducer, ToggleCollapsedAC} from './components/Accordion/accordion-reduser';


function App() {

  // const [accordionCollapsed, setAccordionCollapsed] = useState(true)
  const [accordionState, dispatchState] = useReducer(accordionReducer, {collapsed: false})
  const [rating, setRating] = useState<ValueType>(0)
  const [volOnOff, SetVolOnOff] = useState<boolean>(false)

  const callbackCollapsedHandler = () => {
    dispatchState(ToggleCollapsedAC(accordionState.collapsed))
  }
  return (
    <div className={'App'}>
      <Accordion
        title={'click me'}
        collapsed={accordionState.collapsed}
        callbackCollapsed={callbackCollapsedHandler}
      />
      <UncontrolledAccordion title={'uncontrolled click me'}/>
      <UncontrolledOnOff onChange={SetVolOnOff}/>{volOnOff.toString()}
      <OnOff volOnOff={volOnOff} SetVolOnOff={SetVolOnOff}/>
      <Rating value={rating} setRating={setRating}/>
      {/*<UncontrolledRating />*/}
    </div>
  );
}

export default App;
