function solution(progresses, speeds) {
    const answer = [];
    let comparedNum = 0;
    let pushCount = 0;
    let comparedFlag = true;
    let progressQueue = progresses.map((value, index) =>
        Math.ceil((100 - value)/speeds[index]));

    const calc = () => {
        if(progressQueue.length === 0) return;

        progressQueue = progressQueue.map((value, index) => {
            if(index === 0 && value > 0) comparedNum = value;

            let calcedNum = value - comparedNum;

            if(calcedNum <= 0 && comparedFlag) ++pushCount;
            if(calcedNum > 0) comparedFlag = false;

            return calcedNum;
        })

        answer.push(pushCount)
        progressQueue.splice(0,pushCount);

        comparedNum = 0;
        pushCount = 0;
        comparedFlag = true;

        return calc();
    }

    calc();

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution([93, 30, 55], [1, 30, 5]) === [1, 30, 5])
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]) === [1, 3, 2])
console.log(solution([5, 5, 5], [21, 25, 20]) === [3])
console.log(solution([99, 1, 99, 1], [1, 1, 1, 1]) === [1, 3])
console.log(solution([95, 95, 95], [100, 1, 1]) === [1, 2])

