function solution(numbers) {
    const sum = numbers.reduce((acc, cur) => {return acc + cur})
    return sum / numbers.length
}