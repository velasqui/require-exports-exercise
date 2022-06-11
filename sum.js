const sum = function(numbers){
    let total = 0;
    numbers.forEach(element =>{
        total += element;
    });
    return total;
};


module.exports = sum;