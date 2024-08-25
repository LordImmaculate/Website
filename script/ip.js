    async function fetchIpAddress() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            document.getElementById('ip-address').textContent = data.ip;
        } catch (error) {
            console.error('Error fetching IP address:', error);
            document.getElementById('ip-address').textContent = ' Unable to fetch IP address';
        }
    }

    window.onload = fetchIpAddress;