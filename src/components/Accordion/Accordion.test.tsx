import {accordionReducer, StateType, ToggleCollapsedAC} from './accordion-reduser';

test('collapsed should be true', () => {
  const state: StateType = {
    collapsed: false
  }

  const newState = accordionReducer(state, ToggleCollapsedAC(!state.collapsed))
  expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
  const state: StateType = {
    collapsed: true
  }

  const newState = accordionReducer(state, ToggleCollapsedAC(!state.collapsed))
  expect(newState.collapsed).toBe(false)
})

// не могу создать подобный тест т.к. создан ACTION-CREATOR с типизацией,
// поэтому необходимость подобных тестов отпадает
// test('i expect an error', () => {
//   const state: StateType = {
//     collapsed: false
//   }
//
//     expect(() => {
//       accordionReducer(state, {type: 'Dich',
//         payload: {collapsed: state.collapsed}})
//     }).toThrowError()
// })
