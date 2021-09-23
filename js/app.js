// UI 

// Start Navbar 
const navbuttons = document.querySelector(".navbuttons");
// console.log(navbuttons);
navbuttons.addEventListener('click',()=>{
    navbuttons.classList.toggle('changes');
});

 let navbar = document.querySelector('.navbar');
// console.log(navbar);

window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;

    // console.log(getscrolly);

    if(getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
});

// End Navbar 

// Start Collecton Section 

const collectionlists = document.querySelectorAll('.collectlists');
const filterlams = document.querySelectorAll('.filters.lam'),
      filtertesls = document.querySelectorAll('.filters.tes'),
      filterauds = document.querySelectorAll('.filters.aud');

collectionlists.forEach((collectionlist)=>{
    //    console.log(collectionlist);

    collectionlist.addEventListener('click',(e)=>{
        // console.log('hay');
        let datafilter = collectionlist.getAttribute('data-filter');
        // console.log(datafilter);

        removeactiveitem();

        e.target.classList.add('activeitems');

        if(datafilter === "all"){

            filterlams.forEach((filterlam)=>{
                filterlam.style.display="inline-block";
            });

            filtertesls.forEach((filtertesl)=>{
                filtertesl.style.display="inline-block";
            });

            filterauds.forEach((filteraud)=>{
                filteraud.style.display="inline-block"
            });

        }else if(datafilter === "lam"){

            filterlams.forEach((filterlam)=>{
                filterlam.style.display="inline-block";
            });

            filtertesls.forEach((filtertesl)=>{
                filtertesl.style.display="none";
            });

            filterauds.forEach((filteraud)=>{
                filteraud.style.display="none";
            });

        }else if(datafilter === "tes"){

            filterlams.forEach((filterlam)=>{
                filterlam.style.display="none";
            });

            filtertesls.forEach((filtertesl)=>{
                filtertesl.style.display="inline-block";
            });

            filterauds.forEach((filteraud)=>{
                filteraud.style.display="none";
            });

        }else{

            filterlams.forEach((filterlam)=>{
                filterlam.style.display="none";
            });

            filtertesls.forEach((filtertesl)=>{
                filtertesl.style.display="none";
            });

            filterauds.forEach((filteraud)=>{
                filteraud.style.display="inline-block";
            });
        }
   });
});

// remove current active item 

function removeactiveitem(){
    collectionlists.forEach((collectionlist)=>{
        collectionlist.classList.remove("activeitems");
    })
}

// End Collection Section 

// Start Footer Section 

const showyear = document.getElementById('showyear');
const getfullyear = new Date().getFullYear();
showyear.textContent=getfullyear;

// End Footer Section 