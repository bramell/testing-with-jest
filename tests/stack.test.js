const stack = require('../src/stack');

// Testar ifall stacken är undefined efter att ett element tas bort
test('pop on stack with one element returns undefined', () => {
    expect(stack.pop()).toBeUndefined(); // Åtgärdat, istället för toBeDefined ska det vara tobeUndefined
});
