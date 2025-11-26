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

// mirror dialog
  $( "#dialog3" ).dialog({ 
    autoOpen: false, 
    position: { my: "left+10% top-75%", at: "center", of: opener3 }
  });
  $( "#opener3" ).click(function() {
   $( "#dialog3" ).dialog( "open" );
});




  // typing text main websitte
  // var typed = new Typed('#typed', {
  //   stringsElement: '#typed-strings',
  //   typeSpeed: 20,
  // });

  //  var typed = new Typed('#typed2', {
  //   stringsElement: '#typed-strings2'
  // });

  //    var typed = new Typed('#typed3', {
  //   stringsElement: '#typed-strings3',
  //   typeSpeed:50,
  // });

  const typedConfigs = [
  {
    id: '#typed',
    strings: '#typed-strings',
    speed: 20
  },
  {
    id: '#typed2',
    strings: '#typed-strings2',
    speed: 20
  },
  {
    id: '#typed3',
    strings: '#typed-strings3',
    speed: 50
  },
  {
    id: '#typed4',
    strings: '#typed-strings4',
    speed: 50
  },
  {
    id: '#typed5',
    strings: '#typed-strings5',
    speed: 50
  }
];

// Shuffle array for random order
typedConfigs.sort(() => Math.random() - 0.5);

//loop through them and start each with a delay
typedConfigs.forEach((config, index) => {
  setTimeout(() => {
        const el = document.querySelector(config.id);
    el.style.zIndex = index + 1;

    new Typed(config.id, {
      stringsElement: config.strings,
      typeSpeed: config.speed
    });
  }, index * 2000); // 2-second delay between each
});