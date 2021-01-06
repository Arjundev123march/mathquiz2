
function a(){
    p1=document.getElementById("a1").value;
    p2=document.getElementById("b1").value;
    localStorage.setItem("player1", p1);
    localStorage.setItem("player2", p2);
    window.location = "index1.html"; 
}
 