var colors = [
      '#B9424C',
      '#C84D4D',
      '#DB5E4E',
      '#E07153',
      '#30334E',
      '#4467AA',
      '#3B4A7B',
      '#597DB6',
      '#99B7DD',
      '#4F66A5',
      '#6F80B7',
      '#E3F1F7'
   ];

   setTimeout(function(){
      var color = colors[Math.floor(Math.random() * colors.length)];
      document.getElementsByClassName('inner')[0].style.backgroundColor = color;
      document.getElementById('color-wrapper').classList.remove('loading');
    }, 100);