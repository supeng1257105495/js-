/**
 * Created by È‰—© on 2017/10/11.
 */
var funa = function(){
    var a = "sakura";
    console.log("I am "+a);
};

var funb =function(){
    var b = "naruto";
    console.log("I am "+b);
};

var func= function(){
    var c= "sasuke";
    console.log("I am "+c);
};
funa();
funb();
func();

var  func = function(){
    var a=1;
    return function(){
        a++;
        console.log(a);
    }
};

var f = func();
f();
f();
f();

function Foo() {
    var i = 0;
    return function() {
        console.log(i++);
    }
}

var f1 = Foo(),
    f2 = Foo();
f1();
f1();
f2();