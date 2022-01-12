// TODO: Write Your JavaScript Code Here
 console.log(equalityChecker)

equalityChecker(7 , "42");
// equalityChecker(7 , 7);
// equalityChecker(7 , 14);
// equalityChecker(7 , "What's a function?");

var equalityChecker = function( inputOne, inputTwo){  

    console.log( inputOne, inputTwo);
    
    if ( inputOne === inputTwo ){
        console.log("They are equal in type and value" )

    } else if(inputOne == inputTwo ){
        console.log("They are equal in value")
    } else {
        console.log("The values are not equal" )
    }


} // end equalityChecker fct definition

console.log(equalityChecker)
