function solution(k, score) {
    const hallOfFame = [];
    const answer = [];

    // for(let i = 0; i < k; i++) {
    //     answer.push(Math.min(...score.slice(0, k)));
    // }

    for(let i = 0; i < score.length; i++) {
        hallOfFame.push(score[i]);
        hallOfFame.sort((a, b) => b - a);
        
        if(hallOfFame.length > k) {
            hallOfFame.pop();
        }

        answer.push(hallOfFame[hallOfFame.length - 1]);
    }
    
    return answer;
}