const solution = (participant, completion) => {
    const participantDummy = participant.sort();
    const completionDummy = completion.sort();
    let answer = '';

    for(let i = 0; i < participant.length; ++i) {
        if(participantDummy[i] !== completionDummy[i]) {
            answer = participantDummy[i]
            break;
        }

    }

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]) === "leo")
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]) === "vinko")
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]) === "mislav")