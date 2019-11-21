function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
      
      
   if (s < 20) {
    document.getElementById("txt").style.color = "pink";
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/QyJ0We4GHpjBa7PvKL/giphy.gif')";
  } else if (s < 40) {
    document.getElementById("txt").style.color = "orange";
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/VOPK1BqsMEJRS/giphy.gif')";
  } else {
     document.getElementById("txt").style.color = "lightblue";
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif')";
  }    
      
  
  }
  
  
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i; 
      
      
  }
  