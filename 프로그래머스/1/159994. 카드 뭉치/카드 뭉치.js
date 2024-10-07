function solution(cards1, cards2, goal) {
    var answer = "Yes";
    while(goal.length) {
        if(goal[0] === cards1[0]) {
            cards1.shift();
            goal.shift();
        } else if(goal[0] === cards2[0]) {
            cards2.shift();
            goal.shift();
        } else return "No";
    };
    return answer;
}