import {isValidEnumValue} from '../utils/is-valid-enum-value';
import {entriesInMapWithValue} from '../utils/entries-in-map-with-value';
import Enum from '../enum';
import {
    __IS_CACHED__
} from './symbols';

const enumCache = new Map();

export default class EnumSingleton extends Enum {
    static uncache(item) {
        let cachedValue = undefined;

        if (isValidEnumValue(item)) {
            cachedValue = enumCache.get(item);
            if (cachedValue !== undefined) {
                enumCache.delete(item);
            }
        } else if (item instanceof EnumSingleton) {
            entriesInMapWithValue(enumCache, item)
                .forEach(entry => {
                    cachedValue = entry[1];
                    enumCache.delete(entry[0])
                })
            ;
        }
        return cachedValue;
    }
    static exists(item) {
        return isValidEnumValue(item)
            ? enumCache.has(item)
            : (entriesInMapWithValue(enumCache, item).length > 0)
        ;
    }
    constructor(val) {
        let inst = enumCache.get(val);

        if (inst) {
            return inst;
        }

        super(val);
        enumCache.set(val, this);
        this[__IS_CACHED__] = true;
    }
    uncache() {
        if (this[__IS_CACHED__]) {
            this.constructor.uncache(this);
            this[__IS_CACHED__] = false;
        }
        return this;
    }
}
