function solution(numbers) {
    let arrSet = numbers.split('').sort((a, b) => b - a)
    let answerSet = [];
    let resultSet = []

    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const setArr = (rest, be) => {
        if (rest.length === 0) answerSet.push(be)
        else {

            rest.forEach((value, key) => {
                let tmpBe = be
                let tmpRest = rest.slice()

                tmpBe += value
                tmpRest.splice(key, 1)
                setArr(tmpRest, tmpBe)
            })
        }
    }

    setArr(arrSet, "")

    for(let i =1; i <= answerSet[0].length; ++i) {
        answerSet.forEach(value => {
            let tmp = value.substr(0,i)
            answerSet.push(tmp)
        })
    }

    answerSet.forEach(v => resultSet.push(Number(v)))

    resultSet = resultSet.filter(v => isPrime(v))
    resultSet = resultSet.filter((item, index) => resultSet.indexOf(item) === index);

    return resultSet.length;
}

// 소수 판별, 배열 경우의 수 집합 생성, 중복 제거

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution("17") === 3)
console.log(solution("011") === 2)
console.log(solution("000000") === 0)
console.log(solution("021") === 1)
