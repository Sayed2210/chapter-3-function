const evenOrOdd = (num: number): boolean => {
    if(num === 0){
        return true
    }else if(num === 1){
        return false
    }else if(num < 0){
        return evenOrOdd(-num)
    }else{
        return evenOrOdd(num - 2)
    }
}

console.log(evenOrOdd(50))
console.log(evenOrOdd(75))
console.log(evenOrOdd(-1))
console.log(evenOrOdd(-2))