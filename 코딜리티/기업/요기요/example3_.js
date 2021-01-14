function solution(N, S) {
    if (!S) return 2 * N
    let occupied = S.split(" ")
    let available = 0
    let map = {}

    for (let i = 0; i < occupied.length; i++) {
        let row = occupied[i][0]
        let col = occupied[i][1].charCodeAt(0) - 64

        if (map.hasOwnProperty(row)) {
            let tmp = map[row]
            tmp.push(col)
            map[row] = tmp
        } else {
            map[row] = [col]
        }
    }

    for (const [key, value] of Object.entries(map)) {
        let section1 = 1;
        let section2 = 1;
        let section3 = 1;

        for (let j = 0; j < map[key].length; j++) {
            let seatNo = map[key][j];

            if (seatNo === 2 || seatNo === 3) section1 = 0

            if (seatNo === 4 || seatNo === 5) {
                section1 = 0
                section2 = 0
            }

            if (seatNo === 6 || seatNo === 7) {
                section2 = 0
                section3 = 0
            }

            if (seatNo === 8 || seatNo === 9) section3 = 0
        }
        available += Math.max(section1 + section3, section2)

    }


    available += (N - map.size || 0) * 2

    return available
}


console.log(solution(2, "1A 2F 1C"))
console.log(solution(1, ""))
