 import {taskFirst, taskNext } from './0-constants.js';

describe('Test Suite for taskFirst and taskNext', ()=>{
  test('testFirst should return a string', () => {
    const result = taskFirst();
    expect(typeof result).toBe('string');
  });

  test('taskNext should return a string', ()=>{
    const result = taskNext();
    expect(typeof result).toBe('string');
  });
});
