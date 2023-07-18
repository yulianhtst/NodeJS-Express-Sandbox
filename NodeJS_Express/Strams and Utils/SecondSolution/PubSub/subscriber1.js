const observer = require('./observer')


function subscribe() {
    observer.on('alert', (data) => {
        console.log('Inside second sub');
        console.log(data);
    })
}
subscribe()