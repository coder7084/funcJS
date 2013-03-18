

function objToArray( object ) {
    var array = [];
    var i = 0;
    for( var a in object ) {
        array[i++] = object[a];
    }
    return array;
}
