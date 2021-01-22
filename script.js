const STEPPER = document.getElementById('stepper');

STEPPER.addEventListener('click', (event)=>{
    STEPPER.querySelectorAll("div").forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
});
