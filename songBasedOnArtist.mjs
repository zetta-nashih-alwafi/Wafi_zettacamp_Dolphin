export function artistList(songList) {
    const artist = [...new Set(songList.map(element => element.songArtist))]
    const group = new Object(artist.map(element => [element, groupArtist(element, songList)] ))

    return group
}

function groupArtist(artist, songList) {
    return songList.filter((element) => {
        return element.songArtist === artist
    })
}