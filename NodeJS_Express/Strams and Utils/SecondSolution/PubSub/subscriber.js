const observer = require('./observer')


function subscribe() {
    observer.on('alert', (data) => {
        console.log('Event recived');
        console.log(data);
    })
}
subscribe()