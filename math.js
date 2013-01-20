//MathIO - A Libary of math algorithms and basic math functions
//by @_C1D
//==Basic Math Functions==
var square = function(a){
    return a*a;
};
var isdecimal = function(i){
    if(i % 1 != 0){
        return true;
    }else{
        return false;
    }
};


//==Tessellation==
//This will tell you if the shape will tessellate based on the number of sides
var shape_tessellate = function(s){
    res = 360/(((s-2)*180)/s);
    if (res % 1 == 0) {
        return true;
    }else{
        return false;
    }
};


//==Pythagoras Therom==
//This will get the hyp of a triangle - A is one of the sides, B is the other side
var gethypotenuse = function(a, b){
    return Math.sqrt((a*a)+(b*b));
};
//This will get the length of, one of a triangle's sides - A or B must be the hyp. A must be the higher number, B must be lower than A.
var getx = function(a, b){
    return Math.sqrt((a*a)-(b*b));
};

//Exports the module
module.exports = {
    square : square,
    isdecimal : isdecimal,
    shape_tessellate : shape_tessellate,
    gethypotenuse : gethypotenuse,
    getx : getx
};