switch(window.location.hostname) {   
   
    case "www.instagram.com":
      block("Instagram"); 
      document.head.innerHTML=styles();
       break;

     case "www.whatsapp.com":
      block("Whatsapp");  break;

     case "www.netflix.com":
    block("Netflix");  break;

     case "www.facebook.com":
         block("Facebook");  break;
    

}

function block(name){

   document.body.innerHTML= `
     <body>
      <div class="container">
         <div class="c1">404</div>
         <div class="c2">Get To Work</div>
        <div class="c3"> <p>Seriously , ${name} ?<br> Remember why you started ! 
        
             </div>
      </body>
   `;

   
}

function styles(){
   return `
   body {
      background-color:blue;
     
    }
    `;
}

