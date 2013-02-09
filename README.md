#mathIO

##Status
Build status of files:
```
npm publish - OK
node examples.js - OK
node math.js - OK
=================
LAST TEST: 23/01/13
VERSION: 0.0.4.0
```

##Introduction

mathIO is a (npm module) libary of math algorithms and basic math functions.
When ever I learn a new subject or algorithm todo with Math I add it here. I'm allways learning so
you'll be able to see a lot of great stuff popup on math.IO.
It has some great functions you'll really want to use and functions that can save you some time.

##Install

mathIO does not currently require any external libs, and so if you want to install all you need to do is:

```bash
npm install mathio@0.0.2
```

##Use

How to get the hypotenuse of a Triangle where a = 1 and b = 2:

```javascript
//This will get the hyp of a triangle - Where a = 1 and b = 2. The right answer is: 2.2360797749979
console.log("The hypotenuse of a Triangle where a = 1 and b = 2 is:\n" + m.gethypotenuse(1, 2));
```

How to get the side of a triangle - Where a = 5 (The hyp of the triangle) and b = 2.

```javascript
//This will get the side of a triangle - Where a = 5 (The hyp of the triangle) and b = 2. The right answer is: 4.5825.......
console.log("The side of a Triangle where a = 5 (The hyp of the triangle) and b = 2 is:\n" + m.getx(5, 2));
```

The shape_tessellate function can tell you if a shape will tessellate based on its sides, Here is an example:

```javascript
if(m.shape_tessellate(8) == true){
    console.log("Yes");
}else{
    console.log("No");
}
```

The congurent function takes a JSON object with two triangles and will tell you if they are congruent:

```javascript
console.log("Is a SSS Triangle with 1cm,2cm,3cm congruent with a SSS Triangle with 3cm,2cm,1cm.");
if(m.congruent({a:1, b:2, c:3, type:"SSS"},{a:3, b:2, c:1, type:"SSS"} == true){
    console.log("Yes!");
}else{
	console.log("No!");
}
```

Note: This section is a W.I.P so check out examples.js for all the functions. I did not include the basic math functions so please see the examples file!
