const events = {};

module.exports = {
    //Алтернативни именования:Publish , emit , trigger
    publish(eventName, param) {
        if (events[eventName]) {
            events[eventName].forEach(callback => {
                callback(param)
            })
        }
    },
    //Алтернативни именования: On
    subscribe(eventName, callback) {
        //Овъррайтва се ако го има ако ли не празен масив 
        events[eventName] = events[eventName] || [];

        // if (!events[eventName]) {
        //     events[eventName] = []
        // }

        events[eventName].push(callback)
    },
    // //Off
    // unsubscribe(eventName, callback) {
    // },
} 