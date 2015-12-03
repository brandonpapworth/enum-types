export function isValidEnumValue(val) {'use strict';
    switch (typeof val) {
        case 'string':
            return val.length > 0;
            break;
        case 'number':
            return isFinite(val);
            break;
        default:
            return false;
            break;
    }
}
