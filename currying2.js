// curring function that is rturing the sum of previous values


const curryfunction = () => {
    let prevsum = 0;
    return (newvalue = 0) => {
        prevsum += newvalue;
        return prevsum;
    }
}

const sum = curryfunction();

console.log(sum(1));
console.log(sum(2));
console.log(sum());