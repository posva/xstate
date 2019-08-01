import { Machine, sendParent } from '../es/index';

export const someMachine = Machine({
  context: {
    foo: 'foo'
  },

  states: {
    one: {
      on: {
        '': {
          target: 'two',
          actions: [
            sendParent('parent'),
            sendParent(ctx => ({ type: 'parent', ctx }))
          ]
        }
      }
    },
    two: {}
  }
});
