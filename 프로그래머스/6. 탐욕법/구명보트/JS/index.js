function solution(people, limit) {
    let i = 0;
    const arr = people.sort((a,b) => a-b)

    for(let j = arr.length - 1; i < j; j--){
        if(people[i] + people[j] <= limit) ++i
    }

    return people.length - i;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution([70, 50, 80, 50], 100) === 3)
console.log(solution([70, 80, 50], 100) === 3)
console.log(solution([60, 50, 50], 100) === 2)
