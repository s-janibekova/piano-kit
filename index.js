var numberOfDrums = document.querySelectorAll(".piano").length

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".piano")[i].addEventListener("click", function handleEvent() {
    var key = this.innerHTML

    makesounds(key)
    buttonAnimation(key)
    // this.style.color="pink"
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
  })

}



  // document.addEventListener("keypress", function(event){
  //   var key = event.key
  //   makesounds(key)
  //   buttonAnimation(key)
  // })


function makesounds(key) {
    switch (key) {
      case "d":
        var d = new Audio("sounds/do.mp3");
        d.play();
        break;
      case "r":
        var re = new Audio("sounds/re.mp3")
        re.play();
        break
      case "m":
        var mi = new Audio("sounds/mi.mp3")
        mi.play();
        break
      case "f":
        var fa = new Audio("sounds/fa.mp3")
          fa.play();
        break
      case "s":
        var sol = new Audio("sounds/sol.mp3")
          sol.play();
        break
      case "l":
        var lya = new Audio("sounds/lya.mp3")
          lya.play();
        break
      case "s":
        var si = new Audio("sounds/si.mp3")
          si.play();
        break
      default:
        var d = new Audio("sounds/do.mp3");
        break

    }
  }

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    console.log(currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function() {
      activeButton.classList.remove("pressed")
    }, )
  }

    // // this.style.color="pink"
    // // var audio = new Audio("sounds/tom-1.mp3");
    // // audio.play();
    //
