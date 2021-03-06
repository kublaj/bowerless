#!/usr/bin/env node
'use strict'
const bowerless = require('../src/index')
const help = require('../src/help')
const version = require('../src/version')
const argv = process.argv.slice(2)

if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) version()
if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1) help()
bowerless(argv)
