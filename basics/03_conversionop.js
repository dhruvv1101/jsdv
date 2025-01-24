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