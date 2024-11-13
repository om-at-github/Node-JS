// node rect.js
//rect.js          
var rect={ 

  area: function(l,b)

{

    var a; 

     a=l*b;

 

  console.log('area of rectangle is:'+a);

}

};

 module.exports=rect
 //myrect.js
var mymod=require('./rect.js');

mymod.area(5,4);

 