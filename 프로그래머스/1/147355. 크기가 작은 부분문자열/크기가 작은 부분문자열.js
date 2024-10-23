function solution(t, p) {
    var answer = 0;
    let k = p.length;
    
    for(let i = 0; i <= t.length - k; i++) {
        let substring = t.substring(i, i + k);
        if(parseInt(substring) <= parseInt(p)) answer++;
    }
    
    return answer;
}