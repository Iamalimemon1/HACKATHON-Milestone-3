"use strict";
var _a;
const fields = ['name', 'email', 'phone', 'education', 'skills', 'work-experience'];
const generateResumeButton = document.getElementById('generate-resume');
const checkFormCompletion = () => {
    const allFilled = fields.every(field => {
        const input = document.getElementById(field);
        return input && input.value.trim() !== '';
    });
    generateResumeButton.disabled = !allFilled;
};
const generateResume = (event) => {
    var _a;
    event.preventDefault();
    fields.forEach(field => {
        const input = document.getElementById(field);
        const output = document.getElementById(`output-${field}`);
        if (input && output) {
            output.textContent = `${field.charAt(0).toUpperCase() + field.slice(1).replace('-', ' ')}: ${input.value}`;
        }
    });
    (_a = document.querySelector('.resume-display')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
};
fields.forEach(field => {
    const input = document.getElementById(field);
    input === null || input === void 0 ? void 0 : input.addEventListener('input', checkFormCompletion);
});
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', generateResume);
checkFormCompletion();
