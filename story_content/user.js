function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5g2IMGGols8":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

