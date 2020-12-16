function solution(S) {
    let emailArr = S.split('@')
    let id = emailArr[0]
    let domain = emailArr[1]

    if(id.length > 3) {
        id = id.substr(0, id.length-3) + '***'
    }else {
        if(id.length ===3) id = '***'
        else if(id.length ===2) id = '**'
        else if(id.length ===1) id = '*'
    }

    return id + '@' + domain
}

console.log(solution('bis@naver.com'))
console.log(solution('bisu8018@naver.com'))
