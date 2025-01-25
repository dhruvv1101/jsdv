let score1=null;
let score2=3;
let score3="33"
let score4=undefined;
let score5=Number(score3)
let score6=Number(score1)
let score7="";
let score8=Boolean(score7);
let score9=Boolean(score3);
console.table([typeof(score1),typeof(score2),typeof(score3),typeof(score4),typeof(score5),typeof(score6),typeof(score7),typeof(score8),typeof(score9)]);
console.table([score1,score2,score3,score4,score5,score6,score7,score8,score9]);
/*0       │ null      │
│ 1       │ 3         │
│ 2       │ '33'      │
│ 3       │ undefined │
│ 4       │ 33        │
│ 5       │ 0         │
│ 6       │ ''        │
│ 7       │ false     │
│ 8       │ true   

(index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'object'    │
│ 1       │ 'number'    │
│ 2       │ 'string'    │
│ 3       │ 'undefined' │
│ 4       │ 'number'    │
│ 5       │ 'number'    │
│ 6       │ 'string'    │
│ 7       │ 'boolean'   │
│ 8       │ 'boolean' 

comparision
=== strict check both must be same datatype
number to number comparision are fine
string to number may result ambigous output
null greater equal compared to 0 gives true
while == and less than gives false
so on so forth*/

/*
Datatypes:
-----------------------------------
Primitive:
1)strings
2)null
3)undefined
4)boolean
5)number
6)symbol
7)bigInt
-----------------------------------------
Non-primitive:
1)Array
2)Object
3)Function
--------------------------------------------------
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


--------------------------------------
datatypes are based on memory allocation
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory(copy milegi
 changes real data me nahi honge)

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory(reference milega 
agar naya object banake k usme prev value dalke value chcange hogi toh real data me bhi value change hojaegi)

JavaScript is a dynamically typed language. This means that you don't need to specify
 the data type of a variable when you declare it.
*/