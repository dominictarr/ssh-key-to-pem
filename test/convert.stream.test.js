
var test = require('tape');
var fs = require('fs');
var SSH2PEM_Transformer = require('../').Transform;

var PEM_DATA = '-----BEGIN PUBLIC KEY-----\n' +
  'MIGdMA0GCSqGSIb3DQEBAQUAA4GLADCBhwKBgQC9p3X149INySaCajpSeqZ3yfYb\n' +
  'ujXv3hU3cVrNWFXT3Kihci5SED7s6ZPsKGIe55rLFK5uAvYys78e+8X8YZVSz+3d\n' +
  '7S7jljBELnURWHIO6q2FUlaMqtjGAMxseu7x9zWhXnWXRsp2a+YlZsD9XJ4m+y2h\n' +
  'f56JIZPcmB56BIxW1wIBIw==\n' +
  '-----END PUBLIC KEY-----\n';

var source = fs.createReadStream('./test/ssh.key');
var transformer = new SSH2PEM_Transformer();
var pemfile = fs.createWriteStream('./test/res.pem');

test('pipe', function(t) {
  pemfile.on('finish', function () {
    var text = fs.readFileSync('./test/res.pem').toString('utf8');
    t.equal(text, PEM_DATA);
    t.end();
  });
  source.pipe(transformer).pipe(pemfile);
})