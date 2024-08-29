function onTurnstileSuccess(token) {
            document.getElementById('emailLink').classList.remove('hidden');
            document.getElementById('cf-turnstile').classList.add('hidden');
        }