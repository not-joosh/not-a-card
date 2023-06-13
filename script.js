const body = document.body;
const darkLightModeBtn = document.querySelector('.dark-light-mode');

function toggleMode() {
    const newMode = body.classList.contains('dark') ? 'light' : 'dark';
    body.classList.toggle('dark');
    darkLightModeBtn.classList.toggle('dark');
    darkLightModeBtn.style.borderRadius = "100%";
    const gradient = body.classList.contains('dark')
        ? 'linear-gradient(90deg, #7481f8, #e574ef)'
        : 'linear-gradient(90deg, #d53369, #cbad6d)';
    body.style.background = gradient;
    localStorage.setItem('mode', newMode);
};

function initializeMode() {
    const storedMode = localStorage.getItem('mode');
    
    if (storedMode === 'dark') {
        body.classList.add('dark');
        darkLightModeBtn.classList.add('dark');
        darkLightModeBtn.style.borderRadius = "100%";
        body.style.background = 'linear-gradient(90deg, #7481f8, #e574ef)';
    } else {
        body.classList.remove('dark');
        darkLightModeBtn.classList.remove('dark');
        darkLightModeBtn.style.borderRadius = "initial";
        body.style.background = 'linear-gradient(90deg, #d53369, #cbad6d)';
    }
};

darkLightModeBtn.addEventListener('click', toggleMode);

initializeMode();   
