var x=20
var y=30
var z=10
console.log('The three numbers are ',x,y,z);
if(x>y&&x<z||x<y&&x>z){
    console.log('x is second largest');
}
else if(y>x&&y<z||y<x&&y>z){
    console.log('y is second largest');
}
else{
    console.log('z is second largest');
}