
function animate_String(string) {
    var charc="";
    for (let i = 0; i < string.length; i++) {
        setTimeout(function() {
            charc=string[i]+charc;
            document.write(string[i]); 
        },i* 100); 
    }
    
     
}

let string = document.getElementsByClassName("_animatestring");
animate_String(string);
