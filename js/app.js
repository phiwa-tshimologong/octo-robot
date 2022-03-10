const nav = document.getElementById('navParent');

if(window.location.pathname === '/index.html'){
    window.addEventListener('scroll', () =>{
        if(window.pageYOffset >= 200){
            nav.classList.add('nav-background')
            nav.classList.remove('nav-transparent')
        } else{
            nav.classList.add('nav-transparent')
            nav.classList.remove('nav-background')
        }
    })
}else{
    nav.classList.remove('nav-background');
}



// window.onscroll = () => {
//     console.log(window);
// }