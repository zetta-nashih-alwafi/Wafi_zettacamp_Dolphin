const songList = [
    {
        songName: 'Play The Party',
        songArtist: 'Role Model',
        songGenre: 'Pop',
        songDuration: '3.12'
    },
    {
        songName: 'I Wish You Were Sober',
        songArtist: 'Conan Gray',
        songGenre: 'Pop',
        songDuration: '2.48'
    },
    {
        songName: 'Jojo Hardstyle',
        songArtist: 'AniLifts',
        songGenre: 'Hardstyle',
        songDuration: '3.48'
    },
    {
        songName: 'MIGHT GUY X SELF RULE',
        songArtist: 'Supersaiyanlifts',
        songGenre: 'Hardstyle',
        songDuration: '4.28'
    },
    {
        songName: 'My Soldier Rage',
        songArtist: 'Maul',
        songGenre: 'Hardstyle',
        songDuration: '2.55'
    },
    {
        songName: 'Pluto Projector',
        songArtist: 'Rex Orange County',
        songGenre: 'Indie',
        songDuration: '4.28'
    },
]


addSong('Love It If We Made it', 'The 1975', 'Indie', '4.13')
addSong('Best Friend', 'Rex Orange County', 'Indie', '4.22')
addSong('fukumean', 'Gunna', 'HipHop', '2.05')
addSong('MELTDOWN (feat. Drake)', 'Traviss Scot, Drake', 'HipHop', '4.13')
addSong('On The Radar Freestyle', 'Drake, Central Cee', 'HipHop', '4.35')
addSong('Domenico Scarlatti - Sonata in E Major - K 162', 'Domenico Scarlatti', 'Classical', '6.28')
addSong('Chopin - Nocturne Op. 9 No. 2 in E Flat Major', 'Frédéric Chopin', 'Classical', '6.08')
addSong('Balade No. 1 in G Minor, Op. 23', 'Frédéric Chopi', 'Classical', '9.35')
addSong('8 Variations on "Come un agnello", K 460', 'Wolfgang Amadeus Mozart', 'Classical', '10.42')
addSong('Liebesleid(Love\'s Sorrow)', 'Fritz Kreizler', 'Classical', '4.14')
addSong('People Watching', 'Conan Gray', 'Pop', '2.48')
addSong('Juliet', 'Cavetown', 'Indie', '4.39')
addSong('Disaster', 'Conan Gray', 'Pop', '2.33')

// let test = 0
// let testDuration = playlistLessThanHour(songList)
// let fix = testDuration.forEach((element) => {
//     test += duration(element.songDuration)
// })
// console.log(test);
console.log(songList);
// console.log(duration(songList[12].songDuration));
console.log(groupArtist('Conan Gray', songList));
console.log(groupGenre('Indie', songList));
console.log(Math.round(Math.random()*songList.length));
// console.log(songList.some((element) => element.songArtist === 'Conan Gray'));
console.log(playlistLessThanHour(songList));
console.log("test");

function addSong(name, artist, genre, duration) {
    songList.push({
        songName: name,
        songArtist: artist,
        songGenre: genre,
        songDuration: duration,
    })
}

function groupArtist(artist, songList) {
    return songList.filter((element) => {
        return element.songArtist === artist
    })
}

function groupGenre(genre, songList) {
    return songList.filter((element) => {
        return element.songGenre === genre
    })
}

function playlistLessThanHour(songList) {
    const playlist = new Array
    let totalDuration = 0
    let randomized
    songList.forEach(() => {
        randomized = Math.floor(Math.random()*songList.length)
        if (totalDuration <= 3600) {
            if (!playlist.some((x) => x.songName === songList[randomized].songName) && totalDuration + duration(songList[randomized].songDuration) <= 3600) {
                playlist.push(songList[randomized])
                totalDuration += duration(songList[randomized].songDuration)
            }
        }
    })
    return totalDuration
}

function artistList(songList) {
    const artist = [...new Set(songList.map(element => element.songArtist))]
    const group = new Map(artist.map(element => [element, groupArtist(element, songList)] ))

    return group
}

function genreList(songList) {
    const artist = [...new Set(songList.map(element => element.songGenre))]
    const group = new Map(artist.map(element => [element, groupGenre(element, songList)] ))

    return group
}

console.log(artistList(songList))
console.log(genreList(songList))

function duration(duration) {
    duration = duration.split('.')

    duration = duration[0]*60 + duration[1]*1
    return duration
}