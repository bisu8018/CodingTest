function solution(genres, plays) {
    const answer = [];
    const genreObj = {};
    const sortedGenre = [];

    genres.map((genreItem, genreIndex) => {
        const songList = genreObj[genreItem] ? genreObj[genreItem].songs : [];
        let sumTotalPlays = genreObj[genreItem] ? genreObj[genreItem].totalPlays + plays[genreIndex] : plays[genreIndex];

        songList.push({id: genreIndex, plays: plays[genreIndex]})
        genreObj[genreItem] = {
            totalPlays: sumTotalPlays,
            songs: songList
        }
        genreObj[genreItem].songs
            .sort((a,b) => a.id - b.id)
            .sort((a,b) => b.plays - a.plays);
    })

    Object.keys(genreObj).map((key, index) => {
        sortedGenre.push({
            genre: key,
            totalPlays: genreObj[key].totalPlays
        });
    })

    sortedGenre
        .sort((a,b) => b.totalPlays - a.totalPlays)
        .map((value, index) => {
            answer.push(genreObj[value.genre].songs[0].id)
            if(genreObj[value.genre].songs[1])
                answer.push(genreObj[value.genre].songs[1].id)
        })

    return answer;
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


console.log(solution(["classic", "pop", "classic", "classic", "pop"], ["classic", "pop", "classic", "classic", "pop"]) === ["classic", "pop", "classic", "classic", "pop"])
console.log(solution(["classic", "pop", "classic", "classic", "rock"], [500, 600, 150, 800, 2500]) === [4, 3, 0, 1])
console.log(solution(["classic", "classic", "pop", "classic", "classic", "rock"], [800, 500, 600, 800, 800, 2500]) === [0, 3, 5, 2])