function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, idx) => {
        val = signs[idx] ? val : -val
        return acc += val
    }, 0)
}