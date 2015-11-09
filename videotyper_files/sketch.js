
window.onload = function() {

  navigator.getUserMedia = navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia;


  var aspect = 1280/720;
  var w = window.innerWidth;
  var h = w / aspect;


  var constraints = { 
    audio: false,
    video: { 
      mandatory: {
        minWidth: 1280,
        minHeight: 720
      },
    }
  };

  var textarea = document.querySelector('textarea');
  navigator.getUserMedia(constraints,
    function(stream) {
      var video = document.querySelector('video');
      video.src = window.URL.createObjectURL(stream);
      video.onloadedmetadata = function(e) {
        video.play();
        video.style.width = w;
        video.style.height = h;
        textarea.style.width = w;
        textarea.style.height = h;

      };
    },
    function(err) {
      console.log("The following error occured: " + err.name);
    }
  );


  // attach listener to button in the html page
  // http://www.w3schools.com/jsref/met_element_addeventlistener.asp

  // code to change to italic (this goes inside listener function)
  textarea.style['font-style'] = 'normal';   
  
}