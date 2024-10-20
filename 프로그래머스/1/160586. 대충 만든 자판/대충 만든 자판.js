function solution(keymap, targets) {
    var answer = [];
    let hash = new Map();
    
    for(let key of keymap) {
        for(let i = 0; i < key.length; i++) {
            if(!hash.has(key[i]) || i + 1 < hash.get(key[i])) hash.set(key[i], i + 1);
        }
    }
    
    for(let target of targets) {
        let count = 0;
        for(let i = 0; i < target.length; i++) {
            count += hash.get(target[i]);
        }
        answer.push(count || -1);
    }
    
    return answer;
}