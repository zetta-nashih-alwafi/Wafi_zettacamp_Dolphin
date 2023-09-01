// export class songPlaylistLessThanHour {
//     constructor(songList) {
//         const playlist = new Array
//         let totalDuration = 0
//         songList.forEach(() => {
//             randomized = Math.floor(Math.random()*songList.length)
//             if (totalDuration <= 3600) {
//                 if (!playlist.some((x) => x.songName === songList[randomized].songName) && totalDuration + duration(songList[randomized].songDuration) <= 3600) {
//                     playlist.push(songList[randomized])
//                     totalDuration += duration(songList[randomized].songDuration)
//                 }
//             }
//         })
//         return playlist
//     }
// }

export function playlistLessThanHour(songList) {
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
    return playlist
}

function duration(duration) {
    duration = duration.split('.')
    duration = duration[0]*60 + duration[1]*1
    return duration
}