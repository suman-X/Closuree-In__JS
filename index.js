message = "Good Global";
function sayWord(){
    let message = "Good Morning";
    function sayWord2(){
        console.log("i am second say:"+message);
    }
      message = "good bye"
    return sayWord2;
}

let d = sayWord();
d();