// node modularcricle.js

// Q.Slip 30 - A) Create a Node.js Application that uses user defined module circle.js 
//which exports the functions area() and circumference() and display the details on console.

circle.js

var circle={  

  area: function(r)

{

    var pi=3.14,a;  

     a=pi*r*r;

  

  console.log('area of circle is:'+a);

},

circumference: function(r)

{

    var pi=3.14,c;

  c=2*pi*r;

  console.log('circumference of circle is:'+c);

}

};

 module.exports=circle

 

mycircle.js

var mymod=require('C:/Users/Public/node_prog/circle.js');

mymod.area(5);

mymod.circumference(5);

 

Initiate mycircle.js file :
