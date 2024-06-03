 export enum CountActionKind {
    INCREASE = 'INCREASE',
    DECREASE = 'DECREASE',
  }

  interface CountAction {
    type: CountActionKind;
    payload: number;
  }

  interface CountState {
    count: number;
  }
  
  export default function TheReducer(state: CountState, action: CountAction) {
    const { type, payload } = action;
    switch (type) {
      case CountActionKind.INCREASE:
        return {
          ...state,
          count: state.count + payload,
        };
      case CountActionKind.DECREASE:
        return {
          ...state,
          count: state.count - payload,
        };
      default:
        return state;
    }
  }