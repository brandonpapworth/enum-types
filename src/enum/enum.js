import {isValidEnumValue} from '../utils/is-valid-enum-value';
import {
    __VAL__,
    __AS_STRING__
} from './symbols';

export default class Enum {
    constructor(val) {
        if (!isValidEnumValue(val)) {
            throw new Error('Invalid value for Enum');
        }

        this[__VAL__] = val;
        this[__AS_STRING__] = '' + val;
    }

    toJSON() { return this[__VAL__]; }
    toString() { return this[__AS_STRING__]; }
}
