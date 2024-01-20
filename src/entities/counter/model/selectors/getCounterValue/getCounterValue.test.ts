import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/ui/config/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
    test('should return counter val', () => {
        const state: DeepPartial<StateSchema> = { // DeepPartial позволяет объявить переменные которые нам необходимы для теста, нет необходимости объявлять другие поля
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
