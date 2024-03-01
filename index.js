function loveCal() {
  var randomLove = Math.floor(Math.random() * 100);
  document.querySelector("h2").style.display = "block";
  document.querySelector("h1").style.display = "none";
  return (document.querySelector("h2").textContent =
    "Your Partner love You " + randomLove + "%");
  
  }


document.querySelector("button").addEventListener("click", loveCal);
