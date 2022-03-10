const nav = document.getElementById('navParent');

if(window.location.pathname === '/index.html'){
    nav.classList.add('nav-background');
}else{
    nav.classList.remove('nav-parent');
}
