(() => {
  enum AudioLevel { min, med, max }

  let currentAudio: AudioLevel = AudioLevel.min;
  console.log(currentAudio);
  console.log(AudioLevel);
})()
