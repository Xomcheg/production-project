/* eslint-disable i18next/no-literal-string */
import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
    const {
        className,
    } = props;

    const dispatch = useDispatch();
    // const counterValue = useSelector((state: StateSchema) => state.counter);
    const counterValue = useSelector(getCounterValue);

    const inc = () => {
        dispatch(counterActions.increment());
    };

    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={inc}>Inc</Button>
            <Button data-testid="decrement-btn" onClick={dec}>Dec</Button>
        </div>
    );
};
