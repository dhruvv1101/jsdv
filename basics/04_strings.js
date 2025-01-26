const name="DhruvVerma";
const val=50;
console.log(`my name is ${name.toUpperCase()} and i have a value of${val}`);
const gamename=new String('DhruvVerma');
console.log(gamename);
console.log(gamename[3]);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('r'));
const newgn=gamename.substring(0,4);
console.log(newgn);
const newgn1=gamename.slice(-5,2);//return nothing as value is behind the -5 index;
const newgn2=gamename.slice(-5,8);//return value start from -5 index to end -1;
console.log(newgn1+" "+newgn2);
/*--------------------------------------------
Trim is used to remove extra spaces from given str input
--------------------------------------------------------------
while Replace takes a search value in string and replaces it with given value
------------------------------------------------------------------------------------- 
Split takes two argument first is separator on behalf of which it split and other is limit
the white fox ate the cow
split it on behalf os spaces and you get an array of all words as object of array
-----------------------------------------------------------------------------------------
*/