const fields = ['name', 'email', 'phone', 'education', 'skills', 'work-experience'];
const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;

const checkFormCompletion = () => {
    const allFilled = fields.every(field => {
        const input = document.getElementById(field) as HTMLInputElement | HTMLTextAreaElement | null;
        return input && input.value.trim() !== '';
    });
    generateResumeButton.disabled = !allFilled;
};

const generateResume = (event: Event) => {
    event.preventDefault(); 
    fields.forEach(field => {
        const input = document.getElementById(field) as HTMLInputElement | HTMLTextAreaElement | null;
        const output = document.getElementById(`output-${field}`);
        if (input && output) {
            output.textContent = `${field.charAt(0).toUpperCase() + field.slice(1).replace('-', ' ')}: ${input.value}`;
        }
    });
    document.querySelector('.resume-display')?.classList.remove('hidden');
};


fields.forEach(field => {
    const input = document.getElementById(field) as HTMLInputElement | HTMLTextAreaElement | null;
    input?.addEventListener('input', checkFormCompletion);
});


document.getElementById('resume-form')?.addEventListener('submit', generateResume);


checkFormCompletion();