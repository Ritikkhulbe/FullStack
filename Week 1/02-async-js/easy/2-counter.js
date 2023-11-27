var a = 1;
function printCount(){
    console.clear();
    console.log(a);
    a++;
    setTimeout(printCount,1000);
}
setTimeout(printCount, 1000);
