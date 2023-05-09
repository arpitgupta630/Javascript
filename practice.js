console.log(this.window);
console.log(this);

function message(){
    this.window='ttes';
    console.log("Normal");
    console.log(this);
    console.log(this.window);
}
var num = 1
message();

var m = ()=>{
    this.window='ttes';
    this.Name = 'Arpit'
    console.log('Hello m');
    console.log(this);
    console.log(this.window);
}

m();