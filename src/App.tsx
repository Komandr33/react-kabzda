import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, ValueType} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {MySelect} from './components/Select/MySelect';


function App() {

  const [accordionCollapsed, setAccordionCollapsed] = useState(true)
  const [rating, setRating] = useState<ValueType>(0)
  const [volOnOff, SetVolOnOff] = useState<boolean>(false)

  return (
    <div className={'App'}>
      <Accordion
        title={'ckick me'}
        collapsed={accordionCollapsed}
        callbackCollapsed={() =>
          setAccordionCollapsed(!accordionCollapsed)
        }
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
