const body = document.body;
const darkLightModeBtn = document.querySelector('.dark-light-mode');

darkLightModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    darkLightModeBtn.classList.toggle('dark');
    darkLightModeBtn.style.borderRadius = "100%";
    const gradient = body.classList.contains('dark')
        ? 'linear-gradient(90deg, #7481f8, #e574ef)'
        : 'linear-gradient(90deg, #d53369, #cbad6d)';
    body.style.background = gradient;
});
