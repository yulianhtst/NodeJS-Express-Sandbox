const observer = require('./observer')

function publish(index) {
    console.log('Publish called');
    observer.emit('alert', `Event published ${index} times`)
}

module.exports = publish