function solution(money) {
    const result = [];
    let num = 0;
    let change = 0;
    while(money - 5500 * num >= 0) {
        num++;
        
    }
    change = money - 5500 * (num-1);
    result.push(change)
    result.unshift(num - 1)
    
    return result;
}