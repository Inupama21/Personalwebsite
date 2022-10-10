/*=== scroll animation====*/

const sr = ScrollReveal({
   
    distance:'80px',
    duration:2500,
    delay:200,
    reset:true
})
sr.reveal('.main-outer',{});
sr.reveal('.about-title, .education-title, .contact-title',{origin:'left'});



/*const sr = ScrollReveal();

sr.reveal('.main-outer',{
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
});*/


  