export function entriesInMapWithValue(mapObj, val) {'use strict';
    return mapObj
        .entries()
        .filter(entry => entry[1] === val)
    ;
}
