#!/usr/bin/env node

const meow = require('meow')
const chalk = require('chalk')

const getQuotes = require('./')

const hdr = chalk.bold
const opt = chalk.magentaBright
const dmo = chalk.green
const cmd = chalk.blue

const help = `
  ${hdr('Usage:')}
    ${cmd('quotist')} [<options>]

  ${hdr('Options:')}
    ${opt('--help')}   Print usage
    ${opt('--all')}    List all quotes

  ${hdr('Examples:')}
    ${dmo('$ quotist')}
    ${dmo('$ quotist --all')}
  \n
`

const cli = meow({ help })

const quote = cli.flags.all ? getQuotes.all.join('\n\n') : getQuotes.random()

console.log(`\n${chalk.green(`${quote}`)}\n`)
