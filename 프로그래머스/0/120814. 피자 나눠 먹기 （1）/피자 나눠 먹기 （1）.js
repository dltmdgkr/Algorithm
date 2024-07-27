function solution(n) {
    var answer = 0;
    
    while(true) {
        if(7 * answer < n) {
            answer++;
            continue;
        }
        break;
    }
    
    return answer;
}