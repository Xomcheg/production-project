import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
    test('Increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment)).toEqual({ value: 11 });
    });

    test('Decriment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('Should work empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
