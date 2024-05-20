$(document).ready(function () {
  // Start playing the song
  $("#background-music")[0].play();
  var spins = 0;

  // Function to update the counter and play the song
  function updateCounterAndPlaySong() {
    spins += 1;
    $("#spin").text(spins + " spin" + (spins !== 1 ? "s" : ""));
  }

  // Call the function to start updating the counter and playing the song
  setInterval(updateCounterAndPlaySong, 7800);
});

window.onload = function () {
  var discoColors = [
    "#ff0000",
    "#ff8000",
    "#ffff00",
    "#80ff00",
    "#00ff00",
    "#00ff80",
    "#00ffff",
    "#0080ff",
    "#0000ff",
    "#8000ff",
    "#ff00ff",
    "#ff0080",
  ];
  var currentIndex = 0;

  function changeBackgroundColor() {
    document.getElementById("disco-background").style.backgroundColor =
      discoColors[currentIndex];
    currentIndex = (currentIndex + 1) % discoColors.length;
    setTimeout(changeBackgroundColor, 500); // Change color every 0.5 seconds
  }

  changeBackgroundColor(); // Start the disco effect
};
