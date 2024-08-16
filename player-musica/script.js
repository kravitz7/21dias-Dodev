const songs = ['musica1.mp3', 'musica2.mp3', 'musica3.mp3'];
const titles = ['Música 1', 'Música 2', 'Música 3'];
let songIndex = 0;

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');
const songTitle = document.getElementById('songTitle');

loadSong(songIndex);

// Carrega a música e atualiza o título
function loadSong(index) {
    audioPlayer.src = songs[index];
    songTitle.textContent = titles[index];
    playPauseBtn.textContent = '▶️';
}

// Reproduz ou pausa a música
playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶️';
    }
});

// Botão para próxima música
document.getElementById('nextBtn').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
});

// Botão para música anterior
document.getElementById('prevBtn').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
});

// Atualiza o progresso da música e exibe o tempo
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    progressBar.value = (currentTime / duration) * 100;

    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) currentSeconds = '0' + currentSeconds;

    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) durationSeconds = '0' + durationSeconds;

    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds}`;
    if (duration) {
        durationTimeDisplay.textContent = `${durationMinutes}:${durationSeconds}`;
    }
});

// Permite o controle do progresso da música através do input range
progressBar.addEventListener('input', () => {
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (progressBar.value / 100) * duration;
});
