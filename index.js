function loveCal() {
  var randomLove = Math.floor(Math.random() * 100);
  return alert("Your Partner love You " + randomLove + "%");
}

document.querySelector("button").addEventListener("click", loveCal);
