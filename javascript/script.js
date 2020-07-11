((window,document)=>{

  var modal;
  var enrollbtn;
  var close;
  var ham;

  const init=()=>{
    modal = document.getElementById("modal");
    form = document.getElementById("form");
    enrollbtn = document.getElementById("enrollbtn");
    close = document.getElementById("close");
    ham = document.getElementById("checkbox-toggle");
    nav = document.getElementById("sidenav");
    console.log(enrollbtn,close,modal,ham,nav);
    console.log("init");
    
    close.onclick =()=> {
      modal.style.display = "none";
    }

    nav.onclick=()=>{
      ham.checked=false;
    }
  
    enrollbtn.onclick=()=>{
      modal.style.display = "block";
    }
  
    form.onclick=(ev)=>{
      ev.stopPropagation();
    }

    modal.onclick=()=>{
      modal.style.display = "none";
    }
    
  
  }

  window.onload=init




})(window,document);

// window.onload(()=>{

//     console.log("load");
// })



//   function closeModal(){
//     modal.style.display = "none";
//   }






