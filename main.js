// alert  ("jdjjhjjjcjcjjcjcjcjc")


// document.addEventListener("DOMContentLoaded" ,() => {
//    const div = document.getElementById ("header");
//    const colors = ["#5f4b82" , "#cf5e29" , ];
//    let currentColorIndex = 0;

//    setInterval(() => {
//     div.style.backgroundColor = colors[currentColorIndex];
//     currentColorIndex = (currentColorIndex + 1) % colors.length;
// }, 2000); // Change color every 2 seconds
// });


// var min = document.getElementById("span_1")
//  min.addEventListener("click" , function() {
//     window.location.href ="sign_up.html"
//  })
 
//  var lin = document.getElementById("span_2")
//  lin.addEventListener("click" , function() {
//     window.location.href ="login.html" 
//  })

 
 document.addEventListener("DOMContentLoaded", () => {
   const div = document.getElementById("header");
   const colors = ["#5f4b82", "#cf5e29"];
   let currentColorIndex = 0;
   

   if (div) {
       setInterval(() => {
           div.style.backgroundColor = colors[currentColorIndex];
           currentColorIndex = (currentColorIndex + 1) % colors.length;
       }, 2000);
   }

   const min = document.getElementById("span_1");
   if (min) {
       min.addEventListener("click", function() {
           window.location.href = "sign_up.html";
       });
   }

   const lin = document.getElementById("span_2");
   if (lin) {
       lin.addEventListener("click", function() {
           window.location.href = "login.html";
       });
   }
});


 $(document).ready(function() {
   $("#button_1") .on( "click", function() {
   $(".raw_child_1").fadeToggle();
   })
 }) 


 $(document).ready(function() {
   $("#button_2") .on( "click", function() {
   $("#raw_child_3").fadeToggle();
   })
 }) 


 $(document).ready(function() {
   $("#button_3") .on( "click", function() {
   $("#raw_child_2").fadeToggle();
   })
 }) 


if (typeof jQuery !== 'undefined') {
   console.log("jQuery is loaded!");
} else {
   console.log("jQuery is not loaded!");
}




//  $(document).ready(function() {
//    $("#button_1") .on( "click", function() {
//    $("#raw_child_one").fadeToggle();
//    })
//  })
 
//  $(document).ready(function() {
//    $("#button_1") .on( "click", function() {
//    $("b#raw_child_1").css({display :"flex"});
//      });
// })

$(window) .resize(function(){
   $width = $(window).width();
  if ($width < 766) {   
   $(".head_li") .css({display:"none"});
   $(".hens") .css({display:"flex"});
  } else {
   $(".head_li") .css({display:"flex"});
   $(".hens") .css({display:"none"});
  }
  })




 

// var sin =document.getElementById("raw_child_1")
// var yin =document.getElementById("button_1")
// console.log(yin);



// document.addEventListener('DOMContentLoaded', function() {
//     var myDiv = document.getElementById('span_1');
//     myDiv.addEventListener('click', function() {
//         window.location.href = 'sign_up.html';
//     });
// });

 