function solution(slice, n) {
    let count = 1;
    
    while(slice * count < n) {
        count++;
    }
    
    return count;
}