const express = require('express');
const path = require('path');

// setup root path.
process.env['ROOT_PATHS'] = path.dirname(require.main.filename);
//console.log('root path: ', process.env['ROOT_PATHS']);