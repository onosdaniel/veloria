function toggleMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const isOpen = navMenu.classList.toggle('active');

    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
}

function closeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (!menuToggle || !navMenu) {
        return;
    }

    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', function (event) {
    const nav = document.querySelector('nav');

    if (nav && !nav.contains(event.target)) {
        closeMenu();
    }
});

function handleNo() {
    const textElement = document.getElementById('interactive-text');
    const descriptionElement = document.getElementById('interactive-description');
    const resultLabel = document.getElementById('result-label');
    const buttonGroup = document.getElementById('button-group');
    const resetButton = document.getElementById('reset-button');

    if (!textElement || !descriptionElement || !resultLabel || !buttonGroup || !resetButton) {
        return;
    }

    textElement.textContent = 'We’ll keep the light on for you.';
    descriptionElement.textContent = 'Keep in touch in case you change your mind. When you are ready, our style questionnaire will help you find the pieces that feel most like you.';
    resultLabel.textContent = 'NO RUSH, JUST GOOD TASTE';
    buttonGroup.hidden = true;
    resetButton.hidden = false;
}

const resetButton = document.getElementById('reset-button');

if (resetButton) {
    resetButton.addEventListener('click', function () {
        const textElement = document.getElementById('interactive-text');
        const descriptionElement = document.getElementById('interactive-description');
        const resultLabel = document.getElementById('result-label');
        const buttonGroup = document.getElementById('button-group');

        textElement.textContent = 'Are you ready for fashion?';
        descriptionElement.textContent = 'Answer a few considered questions and we’ll create a starting point for your personal Veloria edit.';
        resultLabel.textContent = 'YOUR EDIT AWAITS';
        buttonGroup.hidden = false;
        resetButton.hidden = true;
    });
}
