document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', function() {
        const timeInput = this.previousElementSibling.previousElementSibling;
        const appointmentInput = this.previousElementSibling;
        const timeValue = timeInput.value.trim();
        const appointmentValue = appointmentInput.value.trim();

        if (timeValue && appointmentValue) {
            const ul = this.previousElementSibling.previousElementSibling.previousElementSibling;
            const li = document.createElement('li');
            li.textContent = `${timeValue} - ${appointmentValue}`;
            ul.appendChild(li);

            timeInput.value = '';
            appointmentInput.value = '';
            
            scheduleNotification(timeValue, appointmentValue);
        }
    });
});

function scheduleNotification(time, appointment) {
    const currentTime = new Date();
    const appointmentTime = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    appointmentTime.setHours(hours);
    appointmentTime.setMinutes(minutes);
    appointmentTime.setSeconds(0);

    const timeDifference = appointmentTime - currentTime;
    
    if (timeDifference > 0) {
        setTimeout(() => {
            alert(`Lembrete: Você tem um compromisso agora: ${appointment}`);
        }, timeDifference);
    }
}
