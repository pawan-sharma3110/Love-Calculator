onload = alert("Hello love birds");
function afterClick(){
    let parsentage = Math.floor(Math.random*100);
    return document.getElementsByClassName(main-heading).innerHTML("your partener gave you" + parsentage+ "% love.");
   
}
document.querySelector('.final-btn').addEventListener('click',afterClick()
);