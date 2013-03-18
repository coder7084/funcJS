/*
 * Javascript Functions Library
 *
 * Copyright 2013, Teena Thomas
 * 
 */
 
function objToArray( object ) {
    var array = [];
    var i = 0;
    for( var a in object ) {
        array[i++] = object[a];
    }
    return array;
}

// -----------------------------------------------------------------------------
// formatInteger( amount )

// Converts supplied float number to integer
// - string amount : string to format

function formatInteger( amount ) {
    if( isNaN( amount )) return '0';

    var negative = false;  
    // Remove decimals and commas
    amount = Math.floor(('' + amount).replace(/,/g, '')) + '';

    if ( amount < 0 ) 
    {
        negative = true;
        var b_arr = amount.replace('-','').split('').reverse();  
    }
    else
        var b_arr = amount.split('').reverse();
        
    var imax = b_arr.length;
    var temp = '';
    for( var i = 0; i < imax; i++ ) {
        if( i % 3 == 0 && i != 0 )
            temp += ',';
        temp += b_arr[i];
    }
    amount = temp.split('').reverse().join('');
    
    if( negative == true)
     amount = '-' + amount;
     
    return amount;
}

// -----------------------------------------------------------------------------
// formatFloat( number )

// Rounds off supplied float number & formats it to string with commas ie: 10000.666 -> 10,000.67
// - string number : string to format

function formatFloat( number ) {
    if( isNaN( number ) == true ) 
        return '0';           

    //Rounding upto 2 decimals (including .00) 
    var num_float = parseFloat(number).toFixed(2); 
    var num_int = num_float.toString().split('.');   
    number = formatInteger(num_int[0]) + '.' + num_int[1];   

    return number;

}

// -----------------------------------------------------------------------------
// currentDate( raw_format )

// Gets today's date
// - boolean raw_format : format to return date
function currentDate( raw_format ) {
    var today = new Date(); 
    day = today.getDate().toString();
    month = (today.getMonth() + 1 ).toString();                             
    if( month.length < 2 )
        month = '0' + month; 
    if( day.length < 2 )
      day = '0' + day;       
    year = today.getFullYear();    

    if( raw_format == true )
        return ( year + month + day ); 
    else 
        return ( month + '/' + day + '/' + year );                     
}

// -----------------------------------------------------------------------------
// alertMessages( messages )
// Converts a messages array into a single string and alerts it
// array messages : JSON array

function alertMessages( messages ) {
    var alertString = '';
    
    if( 'notices' in messages ) {
        for( var i = 0; i < messages.notices.length; i++ )
            alertString += messages.notices[i] + '\n';
    }
    
    if( 'warnings' in messages ) {
        for( var i = 0; i < messages.warnings.length; i++ )
            alertString += 'Warning: ' + messages.warnings[i] + '\n';
    }
    
    if( 'errors' in messages ) {
        for( var i = 0; i < messages.errors.length; i++ )
            alertString += 'Error: ' + messages.errors[i] + '\n';
    }
    
    alert( alertString );
}
