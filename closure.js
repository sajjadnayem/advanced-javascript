function clock(){
    let count = 0;
    return function(){
        count++;
        return count ;
    }
}
const clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
//clock1();
const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());