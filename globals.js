global.Buffer = require('buffer').Buffer;
global.process = require('process');

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: 'file:'
};

// Some modules expect userAgent to be a string
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'React Native';

if (!global.btoa) {
  global.btoa = require('base-64').encode;
}

if (!global.atob) {
  global.atob = require('base-64').decode;
}
