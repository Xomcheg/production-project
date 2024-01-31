import { CounterSchema } from 'entities/counter/model/types/CounterSchema';
import { UserSchema } from 'entities/user';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
