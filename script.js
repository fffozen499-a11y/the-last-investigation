function watchTrailer(){

    document.getElementById("trailer").scrollIntoView({

        behavior: "smooth"

    });

}// your old script code


// loading screen

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.querySelector(".loading-screen").style.display="none";

    },3000);

});