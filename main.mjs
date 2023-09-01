import { playlistLessThanHour } from './songPlaylistLessThanHour.mjs'
import {songList} from './songList.mjs'
import {artistList} from './songBasedOnArtist.mjs'
import {genreList} from './songBasedOnGenre.mjs';
import {albumList} from './songBasedOnAlbum.mjs';

// const songPlaylist = new songPlaylistLessThanHour
console.log(playlistLessThanHour(songList));

console.log(artistList(songList))
console.log(genreList(songList))
console.log(albumList(songList))

// console.log(songPlaylist(songList));