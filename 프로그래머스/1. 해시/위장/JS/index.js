function solution(clothes) {
    const wearingObj = {};
    let tmpAnswerForMulti = 1;
    let tmpAnswerForSum = 0;
    let hasOnlyOne = false;

    clothes.map((value,index) => {
        let tmpValue = wearingObj[value[1]]
        if(!tmpValue) tmpValue = [value[0]];
        else tmpValue.push(value[0]);
        wearingObj[value[1]] = tmpValue;
    })

    const objKeys = Object.keys(wearingObj);

    for(let i=0;i<objKeys.length;++i) {
        let tempArr = wearingObj[objKeys[i]]
        let tempArrLength = Number(tempArr.length);

        // 1개 이상때, 선택 안하는 경우 1 포함
        if(objKeys.length > 1)
            tempArrLength = tempArrLength + 1
        else hasOnlyOne = true

        tmpAnswerForMulti = tmpAnswerForMulti * tempArrLength
    }

    let answer = tmpAnswerForMulti + tmpAnswerForSum

    // 모든 부위의 옷이 한개가 아닐경우, 모두 선택 안한 경우 제외
    if(!hasOnlyOne) answer -= 1

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]) === 5)
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]) === 3)