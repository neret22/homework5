////////////////////////////////////////////
/////// String advanced function
//////////////////////////////////////////

// substring
console.log("abcdefgh".substring(2, 5))


//////contstant expressions
///// https://regexr.com/ 


///Regexps

const wordsPattern = /([A-Za-z0-9'])\w+/g;


console.log("Hello   from    Javascript ".match(wordsPattern)); ///macth certain constant expression

//// >"Hello", "from", "Javascript"





///trim delete empty space an the begging and end of the str

console.log("    hello   world    ".trim())
//// > "hello   world"

console.log("  Hello   from    Javascript ".trim().replace(/(\s)+/g, "-"));

/// >  "Hello-from-Javascript" 

console.llog(" Hello  world  Javascript  ".search(/Java/)); /// search certain constant expression

/// > "19"