function solution(name, yearning, photo) {
    var answer = [];
    let hash = new Map();
    name.forEach((element, index) => {
        hash.set(element, yearning[index]);
    })   
    for(let i=0; i<photo.length; i++) {
        let total = 0;
        for(let j=0; j<photo[i].length; j++) {
            if(hash.get(photo[i][j])) {
                total += hash.get(photo[i][j]);
            }
        }
        answer.push(total);
    }
    return answer;
}