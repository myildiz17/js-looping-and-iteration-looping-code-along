// Code your solutions in this file

// const arr=['ali','veli']
// const event='bthd'
function writeCards(arr,event){
    const arr2=[]
    for (let i=0; i<arr.length; i++){
        arr2.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    };
    return arr2;
};

function countDown(num){
    let number=num
    while (number>-1){
        console.log(number);
        number--
    }
}