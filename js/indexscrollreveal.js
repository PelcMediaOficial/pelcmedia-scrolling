/**
 * @version 1.0
 */

(function ($) {
    "use strict"; // Start of use strict


    ScrollReveal().reveal('.container', {
        origin: 'bottom',
        opacity: null,
        reset: true,
        scale: 0.85,
        duration: 750,
        delay: 250,
    });

    ScrollReveal().reveal('.sr-step-1',  {
        origin: 'left',
        opacity: 0,
        reset: true,        
        duration: 1000,
        delay: 300,
        distance: '10%',
    });

    ScrollReveal().reveal('.sr-step-2',  {
        origin: 'left',
        opacity: 0,
        reset: true,        
        duration: 1000,
        delay: 350,
        distance: '10%',
    });

    ScrollReveal().reveal('.sr-step-3',  {
        origin: 'left',
        opacity: 0,
        reset: true,        
        duration: 1000,
        delay: 400,
        distance: '10%',
    });

    ScrollReveal().reveal('.sr-step-4',  {
        origin: 'left',
        opacity: 0,
        reset: true,        
        duration: 1000,
        delay: 450,
        distance: '10%',
    });

})(jQuery); // End of use strict