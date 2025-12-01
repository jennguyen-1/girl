// main dialog
$( function() {
    $( "#dialog" ).dialog({
        resizable: false,
        draggable: false,
        width: $(window).width() * 0.8,
    });
        
   $(window).on("resize", function() {
     $("#dialog").dialog("option", "width", $(window).width() * 0.8);
    $("#dialog").dialog("option", "position", { my: "center", at: "center", of: window });
});
  } );


// girl as doll/dog dialog
  $( "#dialog1" ).dialog({ 
    autoOpen: false, 
    position: { my: "left+25% top-75%", at: "center", of: opener1 }
  });
  $( "#opener1" ).click(function() {
   $( "#dialog1" ).dialog( "open" );
});

// girl guide dialog
  $( "#dialog2" ).dialog({ 
    autoOpen: false, 
    position: { my: "left+10% top-75%", at: "center", of: opener2 }
  });
  $( "#opener2" ).click(function() {
   $( "#dialog2" ).dialog( "open" );
});

// slideshow script
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//form submission behavior
window.addEventListener("load", function() {
  const form = document.getElementById('contact-form');
  const submitBtn= document.getElementById('submitbtn');
  const input = form.querySelector('textarea[name="girltext"]');

  submitBtn.disabled=true;

  input.addEventListener('input', function(){
    submitBtn.disabled = input.value.trim() === "";
  });

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (input.value.trim()==="") return;
    submitBtn.disabled=true;
    submitBtn.textContent="sending...";

    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("yayyy");
      form.reset();
      submitBtn.disabled = true;
      submitBtn.textContent = "send";
    })
  
  });
});

//typed.js stuff 

  // radomizing order, this is getting all of the .girl elements
const girls = Array.from(document.querySelectorAll('.girl'));

// shuffle array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const shuffledGirls = shuffle(girls);

// loop through shuffled elements and start typed.js
shuffledGirls.forEach((girl, index) => {
  const span = girl.querySelector('.typed-output');
  const stringsEl = girl.querySelector('.typed-strings');

  
let topZ = 1;
  // delay sentences
  setTimeout(() => {
 girl.classList.add("active");
  girl.style.zIndex = topZ++;

    span.style.opacity = 1;
    new Typed(span, {
      stringsElement: stringsEl,
      typeSpeed: 40,
      backSpeed: 40,
      smartBackspace: true,
      backDelay: 15000,
      loop: false,
    });
  }, index * 10000); // 10 second delay between sentences
}); 

