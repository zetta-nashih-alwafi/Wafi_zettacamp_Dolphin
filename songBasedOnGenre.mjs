export function genreList(songList) {
    const artist = [...new Set(songList.map(element => element.songGenre))]
    const group = new Map(artist.map(element => [element, groupGenre(element, songList)] ))

    return group
}

function groupGenre(genre, songList) {
    return songList.filter((element) => {
        return element.songGenre === genre
    })
}