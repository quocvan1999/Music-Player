let musicList = [
    {
        image: './assets/img/0.jpg',
        name: 'Đưa nhau đi trốn',
        singer: 'Đen',
        src: './assets/music/y2mate.com - Đen  Đưa Nhau Đi Trốn ft Linh Cáo MV_320kbps.mp3',
    },
    {
        image: './assets/img/img2.jpg',
        name: 'Ghé qua',
        singer: 'Dick - PC- Tofu',
        src: './assets/music/y2mate.com - GHÉ QUA   OFFICIAL MV  Dick x PC x Tofu_320kbps.mp3',
    },
    {
        image: './assets/img/img1.jpg',
        name: '24h',
        singer: 'LYLY',
        src: './assets/music/y2mate.com - 24H  OFFICIAL MUSIC VIDEO   LYLY ft MAGAZINE_320kbps.mp3',
    },
];

import { getMusicInfo, newAudio, playOrPauseAudio, formarTime, loopAudio, checkLoopAudio, ranDomNumber, randomBackgroundColor, populate } from './method/qv__library.js';

let indexMusic = document.querySelector('#indexMusic');
let musicImg = document.querySelector('#music__img');
let musicName = document.querySelector('#music__name');
let singerName = document.querySelector('#singer__name');

let timeRemaining = document.querySelector('#time__remaining');
let timeLine = document.querySelector('#time__line');
let musicTime = document.querySelector('#music__time');

let volumeLine = document.querySelector('#volume__line');

let btnShuffle = document.querySelector('#btnShuffle');
let btnBackward = document.querySelector('#btnBackward');
let btnPlay = document.querySelector('#btnPlay');
let iconPlay = document.querySelector('#iconPlay');
let iconPause = document.querySelector('#iconPause');
let btnForward = document.querySelector('#btnForward');
let btnRepeat = document.querySelector('#btnRepeat');

let music = document.querySelector('.music');

let musicInfo = '';
let audio = '';
let isPlaying = false;
let isRandom = false;
let mIndex = 0;
let color = '';


loadData(musicList, mIndex)

function loadData(arr, index) {
    resetData();

    musicInfo = getMusicInfo(arr, index, isRandom);
    audio = newAudio(musicInfo.src);

    audio.volume = 0.5;

    setTimeMusic(audio);

    isPlayingCheck();

    indexMusic.innerHTML = `Playing music ${arr.indexOf(musicInfo) + 1} of ${arr.length}`;
    musicImg.style.background = `url(${musicInfo.image})`;
    musicName.innerHTML = musicInfo.name;
    singerName.innerHTML = musicInfo.singer;
    volumeLine.value = (audio.volume) * 100;

    color = randomBackgroundColor();
    music.style.background = color;
    timeLine.style.background = color;
    volumeLine.style.background = color;
}

btnShuffle.addEventListener('click', () => {
    isRandom = !isRandom;
    btnShuffle.classList.toggle('activeIcon');
});

btnPlay.addEventListener('click', () => {
    playOrPauseAudio(audio, '#iconPlay', '#iconPause');
    isPlaying = !isPlaying;
    musicImg.classList.toggle('animationCT');
});

volumeLine.addEventListener('change', () => {
    audio.volume = volumeLine.value / 100;
});

timeLine.addEventListener('change', () => {
    audio.currentTime = timeLine.value;
});

btnForward.addEventListener('click', () => {
    audio.pause();
    if (isRandom === true) {
        let number = ranDomNumber(musicList.length);
        mIndex = number - 1;
    } else {
        mIndex++;
        if (mIndex >= musicList.length) {
            mIndex = 0;
        }
    }
    checkLoopAudio(audio) === true ? btnRepeat.classList.remove('activeIcon') : '';
    isPlaying = true;
    color = randomBackgroundColor();
    loadData(musicList, mIndex);
    audio.play();
    musicImg.classList.add('animationCT');
});

btnRepeat.addEventListener('click', () => {
    btnRepeat.classList.toggle('activeIcon');
    loopAudio(audio);
});

btnBackward.addEventListener('click', () => {
    audio.pause();
    if (isRandom === true) {
        let number = ranDomNumber(musicList.length);
        mIndex = number - 1;
    } else {
        mIndex--;
        if (mIndex < 0) {
            mIndex = musicList.length - 1;
        }
    }
    checkLoopAudio(audio) === true ? btnRepeat.classList.remove('activeIcon') : '';
    isPlaying = true;
    color = randomBackgroundColor();
    loadData(musicList, mIndex);
    audio.play();
    musicImg.classList.add('animationCT');
});

function resetData() {
    indexMusic.innerHTML = `Playing music 0 of 0`;
    musicImg.style.background = 'white';
    musicName.innerHTML = 'Music name';
    singerName.innerHTML = 'Singer name';

    timeRemaining.innerHTML = '00:00';
    timeLine.value = 0;
    musicTime.innerHTML = '00:00';

    volumeLine.value = 0;
}

function setTimeMusic(audio) {
    audio.addEventListener('loadedmetadata', () => {
        timeLine.max = audio.duration;
        musicTime.innerHTML = formarTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        let time = audio.duration - audio.currentTime;

        let timeIsPlaying = formarTime(time);
        timeRemaining.innerHTML = timeIsPlaying;

        timeLine.value = audio.currentTime;
    });

    audio.addEventListener('ended', () => {

        mIndex++;
        if (mIndex >= musicList.length) {
            mIndex = 0;
        }
        loadData(musicList, mIndex);
    });
}

function isPlayingCheck() {
    if (isPlaying === true) {
        iconPlay.style.display = 'none';
        iconPause.style.display = 'inline-block';
    } else {
        iconPlay.style.display = 'inline-block';
        iconPause.style.display = 'none';
    }
}














