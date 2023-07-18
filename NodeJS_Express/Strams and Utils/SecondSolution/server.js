const http = require('http')

const port = 5000;

const server = http.createServer((req, res) => {
    if (req.method == 'GET') {
        res.write('hi')
        res.end()
    } else if (req.method == 'POST') {
        let buffer = ''

        req.on('data', (data) => {
            console.log('Chunk>>>', data.toString());
            //Информацията идва на парчета и трябва да я запазим в буфер преди да я логнем
            buffer += data
        })
        req.on('end', () => {
            const bufferAsObj = JSON.parse(buffer)
            console.log('Buffer', bufferAsObj);

            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            
            res.write(JSON.stringify(bufferAsObj))
            res.end()
        })
    }

})

server.listen(port || 3000, () => console.log(`Server Started on port ${port}`));