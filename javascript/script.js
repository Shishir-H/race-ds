var modal;
var enrollbtn;
var close;

window.onload(()=>{

    console.log("load");
})


  function openModal(){
    modal.style.display = "block";
    
  }
  function closeModal(){
    modal.style.display = "none";
  }

  function load(){
    modal = document.getElementById("modal");
    enrollbtn = document.getElementById("enrollbtn");
    close = document.getElementById("close");
    console.log(enrollbtn,close,modal);
  } 



  close.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }