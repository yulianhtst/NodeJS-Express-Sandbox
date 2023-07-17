const events = {};

module.exports = {

    publish(eventName, param) {
        if (events[eventName]) {
            events[eventName].forEach(callback => {
                callback(param)
            })
        }
    },
    subscribe(eventName, callback) {
        if (!events[eventName]) {
            events[eventName] = []
        }

        events[eventName].push(callback)
    },
}