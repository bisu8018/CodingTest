function solution(begin, target, words) {
    let answer = 0;

    const isAvailable = (word, wordsList) => {
        let tmp = []

        wordsList.map(value => {
            let count = 0
            value.split('').map((v, i) => {
                if (v !== word[i]) ++count
            })

            if (count === 1) tmp.push(value)
        })

        return tmp
    }

    const loop = (word, _words, count) => {
        if (word === target)
            return answer = answer > count || answer === 0 ? count : answer

        let next = isAvailable(word, _words)

        if (next.length > 0)
            return next.map(ele => loop(ele, _words.slice().filter(v => v !== ele), count + 1))
        else
            return count = 0
    }

    loop(begin, words, 0)

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) === 4)
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]) === 0)
