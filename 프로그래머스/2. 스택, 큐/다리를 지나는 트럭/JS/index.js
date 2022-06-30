function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let weightArr = truck_weights;
    let bridgeQueue = [];
    for (let i = 0; i < bridge_length; ++i) {
        bridgeQueue[i] = 0
    }

    const dequeue = () => {
        for (let i = 0; i < bridgeQueue.length; ++i) {
            bridgeQueue[i] = (i === bridgeQueue.length - 1 ? 0 : bridgeQueue[i + 1]);
        }
    }

    const enqueue = () => {
        bridgeQueue[bridgeQueue.length - 1] = weightArr[0];
        weightArr.splice(0, 1);
    }

    const checkWeight = () => {
        let weightSum = bridgeQueue.reduce((a, b) => a + b);

        return weightSum + weightArr[0] <= weight
    }

    const checkTruckExist = () => {
        let weightSum = bridgeQueue.reduce((a, b) => a + b);

        return weightSum !== 0
    }

    do {
        ++answer;

        if (answer !== 0) dequeue()
        if (checkWeight()) enqueue()
    } while (checkTruckExist())

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution(2, 10,[7, 4, 5, 6]) === 8)
console.log(solution(100, 100,[10]) === 101)
console.log(solution(100, 100,[10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) === 110)