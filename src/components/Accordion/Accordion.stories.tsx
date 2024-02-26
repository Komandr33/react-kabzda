import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';
import React, {useState} from 'react';

export default {
  title: 'Accordion',
  component: Accordion,
};

// type Story = StoryObj<typeof Accordion>;  // новый синтаксис
//
// export const FirstStory: Story = {
//   args: {
//     title: 'New sintaxis',
//     collapsed: true,
//     callbackCollapsed: ()=>{}
//   },
// }

const onClickHandler = action('onClick')

export const AccordionCollapsed = () => {
  return (
    <Accordion
      title={'Menu'}
      collapsed={true}
      callbackCollapsed={onClickHandler}/>
  )
}

export const AccordionOpen = () => {
  return (
    <Accordion
      title={'open'}
      collapsed={false}
      callbackCollapsed={onClickHandler}/>
  )
}

export const AccordioDemo = () => {

  const [value, setValue] = useState(true)

  return (
    <Accordion
      title={'Demo'}
      collapsed={value}
      callbackCollapsed={() => setValue(!value)}/>
  )
}