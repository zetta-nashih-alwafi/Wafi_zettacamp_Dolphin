export function albumList(songList) {
    const album = [...new Set(songList.map(element => element.songAlbum))]
    const group = new Object(album.map(element => [element, groupAlbum(element, songList)] ))

    return group
}

function groupAlbum(album, songList) {
    return songList.filter((element) => {
        return element.songAlbum === album
    })
}