((window,document)=>{

  let v_count;

  var modal;
  var enrollbtn;
  var close;
  var ham;
  const REQUEST_BASE="http://localhost:8080/the-race/race-backend/"

  const init=()=>{

    // if(!localStorage.getItem("visited")){
    //   fetch("http://localhost:8080/the-race/race-backend/count.php",{
    //     method:"POST",
    //     // headers={"Content-Type": "application/json"}
    //   }).then((res)=>{
    //     console.log(res);
    //     if(res.responseCode==200){
    //       v_count=res.count;
    //       console.log(res);
    //       localStorage.setItem("visited","true");
    //     }
    //   }).catch((res)=>{
    //     console.log(res);
    //   })
    // }

    modal = document.getElementById("modal");
    form = document.getElementById("form");
    enrollbtn = document.getElementById("enrollbtn");
    close = document.getElementById("close");
    ham = document.getElementById("checkbox-toggle");
    nav = document.getElementById("sidenav");

    contactName = document.getElementById('contact-name');
    contactPhone = document.getElementById('phone-no');
    contactMail = document.getElementById('contact-mail');
    contactSubject = document.getElementById('contact-subject');
    contactMessage = document.getElementById('textarea');
    submitbtn = document.getElementById('submit');

    fname= document.getElementById('fname');
    lname= document.getElementById('lname');
    mail= document.getElementById('mail');
    type= document.getElementById('type');
    phone= document.getElementById('phone-no');
    formenrollbtn = document.getElementById("formenrollbtn");

    // submitbtn.onclick =()=>{
    //   fetch(REQUEST_BASE+"contact.php" ,{
    //     method: 'POST',
    //     body:JSON.stringify({request:"enroll",
    //                         name:contactName.value,
    //                         num:contactPhone.value,
    //                         mail:contactMail.value,
    //                         subject:contactSubject.value,
    //                         message:contactMessage.value
    //                         })
    //   })
      
    // }

    // formenrollbtn.onclick=()=>{
    //   fetch(REQUEST_BASE+"enroll.php",{
    //     method:'POST',
    //     body:JSON.stringify({request:"contact",
    //                         f_name:fname.value,
    //                         l_name:lname.value,
    //                         mail:mail.value,
    //                         phone:phone.value,
    //                         type: type.value,
    //                         })
    //   }).then((res)=>{

    //   })
    // }

    submitbtn.onclick=()=>{

    }


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






