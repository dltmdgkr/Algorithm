function solution(elements) {                                                                                       const n = elements.length;                                                                                     const extendedElements = elements.concat(elements);
    const possibleSums = new Set();
    
    for(let length = 1; length <= n; length++) {
        for(let start = 0; start < n; start++) {
            let subarraySum = 0;
            for(let i = 0; i < length; i++) {
                 subarraySum += extendedElements[start + i];
            }
            possibleSums.add(subarraySum);
        }
    }
    
    return possibleSums.size;                         
}