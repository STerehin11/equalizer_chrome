const equ = new Equalizer({
    audio: '.audio',
    container: '.eq-wrap'
  }).on('change', function (data) {
    console.log('input no.' + data.index + ' changed. new value is ' + data.value);
  }).on('error', function (data) {
    // do some error stuff, i.e. hide controls
    console.log(data.message);
  });
  
  document.getElementById('file').addEventListener('change', function (e) {
    var url = URL.createObjectURL(e.target.files[0]);

    document.getElementById('audio').src = url;
  }, false);