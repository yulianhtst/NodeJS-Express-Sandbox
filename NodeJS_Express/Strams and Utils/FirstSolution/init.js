const pubSub = require('./pubSub')

//pub/sub example
const names = []

const onCatsRequest = (name) => {
    if (names.includes(name)) {
        console.log(`Name ${name} hello again `);
    } else {
        console.log(`We have new cat - ${name}`);
        names.push(name)
    }
    console.log(`We have new Cat - ${name}`);
}

pubSub.subscribe('cats', onCatsRequest)
