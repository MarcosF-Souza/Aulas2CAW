function tocarNotaMusical(nota) {

  const audio = new Audio(`sounds/${nota}.mp3`);
  audio.play();
}