import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import Siema from 'siema';



window.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('#header .nav-items ul')[0].cloneNode(true);
    document.querySelector('#header .nav-mobile-body .nav-links').prepend(navLinks);

    const burgerToggle = document.querySelectorAll('#header .nav-toggle').forEach((burger) => {
        burger.onclick = () => {
            document.querySelector('#header .nav-mobile-card').classList.toggle('nav-mobile-active');
        }
    })


    const siema = new Siema({
        selector: '.siema',
        loop: true,
        duration: 500,
        draggable: false
    });

    document.querySelector('.controls .prev').addEventListener('click', () => siema.prev());
    document.querySelector('.controls .next').addEventListener('click', () => siema.next());
})