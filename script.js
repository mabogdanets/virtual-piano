let down = false;

const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');

const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes');

const btnFullScreen = document.querySelector('.fullscreen');

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

// нажать на клавишу пианино
function pressKey(key) {
  const note = key.dataset.note;
  const src = `assets/audio/${note}.mp3`;
  playAudio(src);
  key.classList.add('piano-key-active', 'piano-key-active-pseudo');
}

// Смена ноты-буквы

btnLetters.addEventListener('click', () => {
  btnLetters.classList.add('btn-active');
  btnNotes.classList.remove('btn-active');

  pianoКeys.forEach((el) => {
    el.classList.add('piano-key-letter');
  });
});

btnNotes.addEventListener('click', () => {
  btnNotes.classList.add('btn-active');
  btnLetters.classList.remove('btn-active');

  pianoКeys.forEach((el) => {
    el.classList.remove('piano-key-letter');
  });
});

// Обработка нажатий мыши
window.addEventListener('mouseup', (event) => {
  down = false;
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
  }
});

piano.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('piano-key')) {
    pressKey(event.target);
    down = true;
  }   
});

piano.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.remove('piano-key-active', 'piano-key-active-pseudo');
  }
});

piano.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('piano-key') && down) {
    pressKey(event.target);
  }
});

// Обработка нажатий клавы

window.addEventListener('keydown', (event) => {
  let letter;
  
  if (event.code === 'KeyD') {
    letter = 'D';
  } else if (event.code === 'KeyF') {
    letter = 'F';
  } else if (event.code === 'KeyG') {
    letter = 'G';
  } else if (event.code === 'KeyH') {
    letter = 'H';
  } else if (event.code === 'KeyJ') {
    letter = 'J';
  } else if (event.code === 'KeyK') {
    letter = 'K';
  } else if (event.code === 'KeyL') {
    letter = 'L';
  } else if (event.code === 'KeyR') {
    letter = 'R';
  } else if (event.code === 'KeyT') {
    letter = 'T';
  } else if (event.code === 'KeyU') {
    letter = 'U';
  } else if (event.code === 'KeyI') {
    letter = 'I';
  } else if (event.code === 'KeyO') {
    letter = 'O';
  }

  if (letter && !event.repeat) {
    pianoКeys.forEach((key) => {
      if (key.dataset.letter === letter) {
        pressKey(key);
      } 
    });
  }
});

window.addEventListener('keyup', (event) => {
  let letter;
  
  if (event.code === 'KeyD') {
    letter = 'D';
  } else if (event.code === 'KeyF') {
    letter = 'F';
  } else if (event.code === 'KeyG') {
    letter = 'G';
  } else if (event.code === 'KeyH') {
    letter = 'H';
  } else if (event.code === 'KeyJ') {
    letter = 'J';
  } else if (event.code === 'KeyK') {
    letter = 'K';
  } else if (event.code === 'KeyL') {
    letter = 'L';
  } else if (event.code === 'KeyR') {
    letter = 'R';
  } else if (event.code === 'KeyT') {
    letter = 'T';
  } else if (event.code === 'KeyU') {
    letter = 'U';
  } else if (event.code === 'KeyI') {
    letter = 'I';
  } else if (event.code === 'KeyO') {
    letter = 'O';
  }

  if (letter) {
    pianoКeys.forEach((key) => {
      if (key.dataset.letter === letter) {
        key.classList.remove('piano-key-active', 'piano-key-active-pseudo');
      } 
    });
  }
}); 
 
// Полноэкранный режим

btnFullScreen.addEventListener('click', (event) => {
  if (!document.fullscreenElement) {
       document.documentElement.requestFullscreen();
   } else {
     if (document.exitFullscreen) {
       document.exitFullscreen();
     }
   }
 
   
 });
 