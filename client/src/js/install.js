const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome <= 67 from automatically showing the prompt
  event.preventDefault();
  // Store the event for triggering later
  butInstall.addEventListener('click', () => {
    event.prompt();
  });
});

butInstall.addEventListener('click', async () => {
  // Logic to install PWA
});

window.addEventListener('appinstalled', (event) => {
  // Logic after app is installed
});
