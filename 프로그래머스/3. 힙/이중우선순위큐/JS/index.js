function solution(operations) {
    const answer = []

    operations.forEach(value => {
        let element = value.split(' ')

        if(element[0] === 'I') {
            answer.push(element[1])
            answer.sort((a,b) => a-b)
        }else {
            if(element[1] === "1") answer.pop()
            else answer.shift()
        }
    })

    return [Number(answer.pop() || 0) , Number(answer.shift())|| 0];
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// console.log(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]) === [0,0])
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]) === [333,-45])
