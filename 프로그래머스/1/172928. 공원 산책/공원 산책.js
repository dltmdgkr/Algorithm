function solution(park, routes) {
    let pos = [0, 0];
    let dict = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    };
    
    for(let i=0; i<park.length; i++) {
        let findedIdx = park[i].indexOf('S');
        if(findedIdx > -1) {
            pos = [i, findedIdx];
            break;
        }
    }
    
    routes.forEach((route, index) => {
        let [op, n] = route.split(' ');
        let newPos = [...pos];
        let valid = true;

        for(let i = 0; i < n; i++) {
            newPos[0] += dict[op][0];
            newPos[1] += dict[op][1];
            
            if(newPos[0] < 0 || newPos[0] >= park.length || newPos[1] < 0 || newPos[1] >= park[0].length) {
                valid = false;
                break;
            }
            
            if(park[newPos[0]][newPos[1]] === 'X') {
                valid = false;
                break;
            }
        }
        if(valid) pos = newPos;
    })
    
    return pos;
}