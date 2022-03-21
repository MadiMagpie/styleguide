document.getElementsByClassName(".icon").onclick = () =>responsive();
function responsive() {
        console.log("yikes");
        var x = document.getElementById("topnav");
        if (x.className === "topnav rowflex") {
          x.className == "topnav rowflex responsive";
        } else {
          x.className = "topnav rowflex";
        }
      }