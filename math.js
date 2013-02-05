//MathIO - A Libary of math algorithms and basic math functions
//STABLE: v0.0.3
//DEVEL: v0.0.3.4
//by @_C1D
//==Basic Math Functions==
//This will square your number
var square = function(a){
    return a*a;
};
//This checks if the input is a decimal
var isdecimal = function(i){
    if(i % 1 != 0){
        return true;
    }else{
        return false;
    }
};
//Gets the sum of numbers in a array
var e = function(array){
	var sum = 0;
	for (var i=0, total=array.length; i < total; i++) {
		sum += array[i];
    }
    return sum;
}


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


//==Congruent Triangles==
//This check if two triangles are congruent. Triangles are formated like this:
//a = {a:1, b:2, c:3, type:"SSS"};
var congruent = function(a, b){
	if((a.a == b.a || a.a == b.b || a.a == b.c) && (a.b == b.a || a.b == b.b || a.b == b.c) && (a.c == b.a || a.c == b.b || a.c == b.c)
	   && (a.type = b.type)){
		return true;
	}else{
		return false;
	}
}


//==Mesurement Conversion==
//This will be able to convert two metric units eg. m to cm, km to m, etc..
//data = {type: {from : 'cm', to: 'm', low: true}, value : 1};
//NOTE: This is an experimental function and has not been tested and may not work. You need to manually add this to module.exports for it to work.
var mconvert = function(data){
	types = {'mm' : 10, 'cm' : 100,'m' : 1, 'km' : 1000};
	var from = data.type.from;
	var to = data.type.to;
	if(data.type.low == true){
		var r = (data.value/types.from)*types.to;
	}else{
		var r = (data.value*types.from)/types.to;
	}
}

//==Circular Functions==
//This function will be able to get the arclength of a circle
//data = {arcangle: 90, radius: 5};
var arclength = function(data){
	return data.arcangle/360*2*math.PI*data.radius;
}
module.exports = {
    square : square,
    isdecimal : isdecimal,
    shape_tessellate : shape_tessellate,
    gethypotenuse : gethypotenuse,
    getx : getx,
    congruent : congruent,
    e : e,
    arclength : arclength
};
