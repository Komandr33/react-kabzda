type StateType = {
  collapsed: boolean
}
type ActionType = ReturnType<typeof ToggleCollapsedAC>

export const accordionReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'TOGGLE-COLLAPSED': {
      return {...state, collapsed: !state.collapsed}
    }
  }
}

export const ToggleCollapsedAC = (collapsed: boolean) => {
  return {
    type: 'TOGGLE-COLLAPSED',
    payload: {collapsed}
  } as const
}