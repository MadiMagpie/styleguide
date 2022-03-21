document.querySelector(".icon").onclick = () => responsive();
function responsive() {
        console.log("yikes");
        var x = document.getElementById("topnav");
        if (x.className === "topnav rowflex") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }