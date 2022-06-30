https://programmers.co.kr/learn/courses/30/lessons/43164

비행기 티켓 배열을 모두 한줄로 연결하는 문제

DFS 사용

배열 중간 부분 자를때

```javascript
let tmpArr = []
let _tmp = []

tmpArr.push(num[1])
tmpDummy = tmpDummy.filter((v) => {
    // 만약 자르는 값이 똑같은게 여러개일 경우 사용
    if (v[0] === start && v[1] === num[1]) _tmp.push(v)
    return (v[0] !== start || v[1] !== num[1])
})
_tmp.pop()

if (_tmp.length > 0) tmpDummy.push(..._tmp)
```
