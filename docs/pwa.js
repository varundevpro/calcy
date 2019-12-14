document.querySelector(".close").addEventListener('click', function () {
    window.close();
});

if (navigator.serviceWorker) {
    console.log("Available SW API");

    navigator.serviceWorker.register('./sw.js', {
        scope: './'
    }).then(function (reg) {
        console.log('Service worker has been registered for scope:' + reg.scope);
    }).catch(function (err) {
        console.log("Can't reg sw.js");
    });
} else {
    console.log('Service worker error');
}
