export const songList = [
    {
        songName: 'Play The Party',
        songArtist: 'Role Model',
        songGenre: 'Pop',
        songAlbum: 'album 1',
        songDuration: '3.12'
    },
    {
        songName: 'I Wish You Were Sober',
        songArtist: 'Conan Gray',
        songGenre: 'Pop',
        songAlbum: 'album 1',
        songDuration: '2.48'
    },
    {
        songName: 'Jojo Hardstyle',
        songArtist: 'AniLifts',
        songGenre: 'Hardstyle',
        songAlbum: 'album 1',
        songDuration: '3.48'
    },
    {
        songName: 'MIGHT GUY X SELF RULE',
        songArtist: 'Supersaiyanlifts',
        songGenre: 'Hardstyle',
        songAlbum: 'album 1',
        songDuration: '4.28'
    },
    {
        songName: 'My Soldier Rage',
        songArtist: 'Maul',
        songGenre: 'Hardstyle',
        songAlbum: 'album 1',
        songDuration: '2.55'
    },
    {
        songName: 'Pluto Projector',
        songArtist: 'Rex Orange County',
        songGenre: 'Indie',
        songAlbum: 'album 1',
        songDuration: '4.28'
    },
]


addSong('Love It If We Made it', 'The 1975', 'Indie', '4.13', 'album2')
addSong('Best Friend', 'Rex Orange County', 'Indie', '4.22', 'album2')
addSong('fukumean', 'Gunna', 'HipHop', '2.05', 'album2')
addSong('MELTDOWN (feat. Drake)', 'Traviss Scot, Drake', 'HipHop', '4.13', 'album2')
addSong('On The Radar Freestyle', 'Drake, Central Cee', 'HipHop', '4.35', 'album2')
addSong('Domenico Scarlatti - Sonata in E Major - K 162', 'Domenico Scarlatti', 'Classical', '6.28', 'album2')
addSong('Chopin - Nocturne Op. 9 No. 2 in E Flat Major', 'Frédéric Chopin', 'Classical', '6.08', 'album2')
addSong('Balade No. 1 in G Minor, Op. 23', 'Frédéric Chopi', 'Classical', '9.35', 'album2')
addSong('8 Variations on "Come un agnello", K 460', 'Wolfgang Amadeus Mozart', 'Classical', '10.42', 'album2')
addSong('Liebesleid(Love\'s Sorrow)', 'Fritz Kreizler', 'Classical', '4.14', 'album2')
addSong('People Watching', 'Conan Gray', 'Pop', '2.48', 'album2')
addSong('Juliet', 'Cavetown', 'Indie', '4.39', 'album2')
addSong('Disaster', 'Conan Gray', 'Pop', '2.33', 'album2')

function addSong(name, artist, genre, duration, album) {
    songList.push({
        songName: name,
        songArtist: artist,
        songGenre: genre,
        songAlbum: album,
        songDuration: duration,
    })
}
