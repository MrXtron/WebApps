
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('https://raw.githubusercontent.com/MrXtron/WebApps/refs/heads/main/Calculator/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(error) {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
