require('dotenv').config();
function fixURL() {
    window.history.pushState({}, document.title, "/");
}
function returnlink() {
    let params = new URLSearchParams(window.location.search);
    let clientcode = params.get('code')
    console.log(clientcode)
    return clientcode
}

function getfromoauth() {
    let clientcode = returnlink()
    fetch('https://login.microsoftonline.com/TenantID/oauth2/v2.0/token', {
        method: 'POST',
        body: {
            client_id: '5f30a859-2a66-4779-89cd-4b23ca0094f1',
            client_secret: process.env.CLIENT_SECRET,
            scope: 'xboxLive.Signin offline_access',
            grant_type: client_credentials,
        }
    })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))

}
