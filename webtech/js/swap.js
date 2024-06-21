// function swap(){
// let x=4;
// let y=3;
// console.log("Original values : x = "+x+", y = "+y);
// x=x+y;
// y=x-y;
// x=x-y;
// console.log("swap values : x = "+x+", y = "+y);
// }

// swap();


// num=prompt("enter a number : ");
// function square(num){
// return num*num;
// }
// console.log("square  of "+num+" is "+ square(num));

// x=prompt("enter a number :");
// function squareRoot(x){
//     return x/2;
// }
// console.log("squareroot  of "+x+" is "+ squareRoot(x));



// var day=new Date();
// var today= day.getDay();
// const dayList=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
//  const getDate= ()=>{ return day.getDate()+" "+day.getMonth()+" "+day.getFullYear();}

// console.log(dayList[today]+" "+getDate());

// function animate_String(string){
//     var string ="w3resource";
//     var charc="";
//     for(let i=0;i<string.length;i++){
   
//     charc = charc + string[i];
    
    
//     }
//     console.log(charc);
   
// }
function animate_String(string) {
    var charc="";
    for (let i = 0; i < string.length; i++) {
        setTimeout(function() {
            charc=string[i]+charc;
            document.write(string[i]); // Print the character without newline
        },i* 100); // Delay increases with each iteration
    }
    
     // Final newline after all characters are printed
}

let string = "w3resource";
animate_String(string);

