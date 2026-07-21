/* =====================================================
   TOM ASSISTANCE - JAVASCRIPT
   Partie 1/3
===================================================== */



// ================= MENU MOBILE =================



const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if (menuToggle) {


    menuToggle.addEventListener("click", () => {


        menuToggle.classList.toggle("active");


        navLinks.classList.toggle("active");


    });


}






// Fermer le menu après clic sur un lien



document.querySelectorAll(".nav-links a")
.forEach(link => {


    link.addEventListener("click", () => {


        menuToggle.classList.remove("active");


        navLinks.classList.remove("active");


    });


});








// ================= ANIMATION AU SCROLL =================



const revealElements =
    document.querySelectorAll(".reveal");



const revealObserver =
    new IntersectionObserver(
        (entries) => {


            entries.forEach(entry => {


                if(entry.isIntersecting){


                    entry.target.classList.add("active");


                }


            });


        },


        {


            threshold:0.15


        }


    );





revealElements.forEach(element => {


    revealObserver.observe(element);


});









// ================= COMPTEURS =================



const counters =
    document.querySelectorAll(".counter");



let counterStarted = false;




function startCounters(){



    if(counterStarted)
        return;



    counterStarted = true;



    counters.forEach(counter => {



        const target =
            Number(counter.dataset.target);



        let current = 0;



        const increment =
            Math.ceil(target / 60);




        const updateCounter = () => {



            current += increment;



            if(current < target){


                counter.textContent =
                    current + "%";


                requestAnimationFrame(updateCounter);


            }

            else {


                counter.textContent =
                    target + "%";


            }


        };



        updateCounter();



    });



}








const statsSection =
    document.querySelector(".stats");



if(statsSection){



    const statsObserver =
        new IntersectionObserver(
            entries => {


                if(entries[0].isIntersecting){


                    startCounters();


                }


            },


            {
                threshold:0.4
            }

        );



    statsObserver.observe(statsSection);



}

/* =====================================================
   FAQ / RETOUR HAUT / SCROLL
   Partie 2/3
===================================================== */






// ================= FAQ ACCORDEON =================



const faqItems =
    document.querySelectorAll(".faq-item");



faqItems.forEach(item => {



    const question =
        item.querySelector(".faq-question");



    const answer =
        item.querySelector(".faq-answer");



    question.addEventListener("click", () => {



        const isActive =
            item.classList.contains("active");



        // Ferme les autres questions

        faqItems.forEach(other => {


            other.classList.remove("active");


            const otherAnswer =
                other.querySelector(".faq-answer");


            otherAnswer.style.maxHeight = null;


        });





        if(!isActive){



            item.classList.add("active");



            answer.style.maxHeight =
                answer.scrollHeight + "px";



        }



    });



});









// ================= BOUTON RETOUR HAUT =================



const backTop =
    document.querySelector(".back-top");




window.addEventListener("scroll", () => {



    if(window.scrollY > 500){



        backTop.classList.add("show");



    }

    else {



        backTop.classList.remove("show");



    }



});





if(backTop){



    backTop.addEventListener("click", () => {



        window.scrollTo({



            top:0,


            behavior:"smooth"



        });



    });



}









// ================= HEADER AU SCROLL =================



const header =
    document.querySelector(".header");



window.addEventListener("scroll", () => {



    if(window.scrollY > 50){



        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";



    }

    else {



        header.style.boxShadow =
            "none";



    }



});








// ================= LIENS INTERNES =================



document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {



    anchor.addEventListener("click", function(e){



        const target =
            document.querySelector(
                this.getAttribute("href")
            );



        if(target){



            e.preventDefault();



            target.scrollIntoView({



                behavior:"smooth",


                block:"start"



            });



        }



    });



});

/* =====================================================
   FORMULAIRE / FINALISATION
   Partie 3/3
===================================================== */






// ================= FORMULAIRE CONTACT =================







    const contactForm =
    document.querySelector(".contact-form");


if(contactForm){

    contactForm.addEventListener(
        "submit",
        () => {

            showNotification(
                "Message envoyé avec succès.",
                "success"
            );

        }
    );

}







// ================= VALIDATION EMAIL =================



function validateEmail(email){


    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    return regex.test(email);


}









// ================= NOTIFICATIONS =================



function showNotification(
    text,
    type
){



    const notification =
        document.createElement("div");



    notification.className =
        "notification " + type;



    notification.textContent =
        text;




    document.body.appendChild(notification);






    setTimeout(() => {



        notification.classList.add("visible");



    },100);






    setTimeout(() => {



        notification.classList.remove("visible");



        setTimeout(() => {



            notification.remove();



        },300);



    },3000);



}








// ================= INITIALISATION =================



window.addEventListener(
    "load",
    () => {



        document.body.classList.add(
            "loaded"
        );



    }

);
