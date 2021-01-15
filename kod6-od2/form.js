
   var add = document.getElementById("ad");
   var soyy = document.getElementById("soyad");
   var parr=document.getElementById("kullanicisifre");
   var parr2=document.getElementById("kullanicitsifre");
   var p=document.getElementById("aciklama");
   soyy.addEventListener("keyup", function () {
       document.getElementById("kullaniciad").value ="@"+ add.value + soyy.value;
   });
   function kontrol() {
       document.getElementById("mesaj").className="mesaj";
       document.getElementById("mesaj1").className="mesaj1";
  if(parr.value==parr2.value){
      if(parr.value.length>=8){
         
          document.getElementById("mesaj1").className="mesajj1";
          p.innerHTML="Hoşgeldin"+ document.getElementById("kullaniciad").value;
      }
  }
  else{
      if(parr.value.length<8 ||(parr.value!=parr2.value)){
        document.getElementById("mesaj").className="mesajj";
      }   
     
    }
       }
   