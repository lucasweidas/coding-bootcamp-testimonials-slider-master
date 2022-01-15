// IIFE
(() => {
    // Functions
    function configure(person, className) {
        removeClass(className);
        setTimeout(() => {
            review.innerText = person.review;
            user.innerText = person.user;
            role.innerText = person.role;
            image.src = person.img;
            image.alt = person.user;
        }, 250);
    }

    function change(className) {
        if (displayed === 'tanya') {
            configure(john, className);
            return (displayed = 'john');
        }
        configure(tanya, className);
        displayed = 'tanya';
    }

    function addClass(className) {
        review.classList.add(className);
        user.classList.add(className);
        role.classList.add(className);
        image.classList.add(className);
    }

    function removeClass(className) {
        setTimeout(() => {
            review.classList.remove(className);
            user.classList.remove(className);
            role.classList.remove(className);
            image.classList.remove(className);
            unlockClick = true;
        }, 500);
    }

    // DOM Selectors
    const review = document.querySelector('.review p');
    const user = document.querySelector('.user');
    const role = document.querySelector('.role');
    const image = document.querySelector('#img-user');
    const btnPrev = document.querySelector('#btn-prev');
    const btnNext = document.querySelector('#btn-next');

    // Objects
    const tanya = {
        review: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        user: 'Tanya Sinclair',
        role: 'UX Engineer',
        img: 'images/image-tanya.jpg',
    };

    const john = {
        review: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        user: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        img: 'images/image-john.jpg',
    };

    // Support Variables
    let displayed = 'tanya';
    let unlockClick = true;

    // Events
    btnPrev.addEventListener('click', () => {
        if (unlockClick) {
            unlockClick = false;
            addClass('slide-left');
            change('slide-left');
        }
    });

    btnNext.addEventListener('click', () => {
        if (unlockClick) {
            unlockClick = false;
            addClass('slide-right');
            change('slide-right');
        }
    });
})();
