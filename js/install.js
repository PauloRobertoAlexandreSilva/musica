window.addEventListener('load', event => {

    // Código para mostrar uma mensagem para instalar como um app no desktop
    var buttonInstallApp = document.getElementById('buttonInstallApp');
    buttonInstallApp.style.display = 'none';

    var instalarApp;

    window.addEventListener('beforeinstallprompt', event => {
        instalarApp = event;

        buttonInstallApp.style.display = 'inline-block'; 

        // console.log(event.platforms); // "web", "android", "windows"

        event.userChoice.then(function(choiceResult) {
            // console.log(choiceResult.outcome); // "accepted" or "dismissed"
        }, function handleError(e) {
            console.log(e);
        });
    });

    
    window.onappinstalled = function() {
        console.log('👍', 'Obrigado por instalar nosso app!');
    };

    window.addEventListener('appinstalled', event => {
        console.log('👍', 'app installed', event);
    });

    buttonInstallApp.addEventListener('click', event => {
        console.log('👍', 'buttonInstallApp clicked');

        instalarApp.prompt();

        instalarApp.userChoice.then(response => {
            if (response.outcome === 'accepted') {
                //console.log('Usuário aceitou a instalação');
            } else {
                //console.log('Usuário recusou a instalação');
            }

            instalarApp = null;
        });
    });
});