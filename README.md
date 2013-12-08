# ssh-key-to-pem

convert an ssh key to PEM format.

## Usage

read a ssh key and convert it to PEM format.


    var fs = require('fs');
    var sshKeyToPEM = require('ssh-key-to-pem');

    var key = fs.readFileSync('./key.pem', 'ascii');

    var options = {
      host: 'localhost',
      port: 8443,
      path: '/',
      method: 'GET',
      headers: {}
    };

    // Adds a 'Date' header in, signs it, and adds the
    // 'Authorization' header in.
    var req = https.request(options, function(res) {
      console.log(res.statusCode);
    });


    httpSignature.sign(req, {
      key: key,
      keyId: './cert.pem'
    });

    req.end();

## Installation

    npm install ssh-key-to-pem

## License

MIT.

