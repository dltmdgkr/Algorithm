function solution(n, m, section) {
    let counter = 0;
    let painted = 0;
    
    for(let i = 0; i < section.length; i++) {
        if(section[i] > painted) {
            counter++;
            painted = section[i] + m - 1
        } 
    }

    return counter;
}