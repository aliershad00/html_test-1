document.write(`The final bill is = ${(1*100) + (2*10) + (1*30)}`);
document.writeln(`\n\n\n\n\n\n\n`);
// Calling the gst Function 
gst();

function gst(){
    let iphone = 79990;
    let airpod = 24990;
    let Gst = Math.round((79990 * 0.18) + (2 * 24990 * 0.18));
    // return Gst;
    document.writeln(`The maximum GST is = ${Gst}\n`);
   
}


document.writeln(`\n\n\n\n\n\n\n`);

///creation strings
let text = "'This is a Text'";
let text2 ='"This is a Text2"';
let text3 =`This is a Text3`;
document.writeln(`double code string is like ${text2} single code string is ${text} , backtic ${text3} ${'`like this`'} ` + `this is the concateneting with num `+10);