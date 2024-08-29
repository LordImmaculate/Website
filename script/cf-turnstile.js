function onTurnstileSuccess(token) {
            document.getElementById('emailLink').classList.remove('hidden');
            document.getElementById('emailText').classList.remove('hidden');
            document.getElementById('cf-turnstile').classList.add('hidden');
            document.getElementById('emailTitle').innerHTML = 'Send me an email';
        }