<!-- ![quotist logo](./docs/quotist-logo.png) -->

## Quotist

Get a random quote right inside your CLI.

<p align="center">
  <a href="https://david-dm.org/alexdevero/quotist"><img alt="Dependency Status" src="https://david-dm.org/alexdevero/quotist.svg?style=flat"></a>
  <a href="https://david-dm.org/alexdevero/quotist?type=dev"><img alt="devDependency Status" src="https://david-dm.org/alexdevero/quotist/dev-status.svg?style=flat"></a>
  <a href="http://opensource.org/licenses/MIT"><img alt="MIT License" src="https://badgen.net/badge/license/MIT/blue"></a>
</p>

<p align="center">
  <a href="https://alexdevero.com"><img alt="Built by DEVERO" src="https://badgen.net/badge/Built%20by/DEVERO/d30320"></a>
  <a href="https://github.com/alexdevero/quotist/releases"><img alt="Current release" src="https://badgen.net/github/release/alexdevero/quotist"></a>
</p>

#### Table of contents

* [Demo](#demo)
* [Install](#install)
* [Usage](#usage)
* [API](#api)
* [CLI](#cli)
* [Browser](#browser)
* [Support this project](#support-this-project)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

### Demo

[Quotist](https://alexdevero.github.io/quotist)

### Install

```
$ npm install --save quotist
```

### Usage

```js
const quotist = require('quotist')

console.log(quotist.all)
console.log(quotist.random())
```

### API

#### .all

*Returns*: `array`

A list of all quotes.

#### .random()

*Returns*: `string`

A random quote. (i.e. *“I ain't got time to bleed.”*)

### CLI

```
$ npm install --global quotist
```

```
$ quotist --help

  Get a random quote right inside your CLI.

  Usage:
    quotist [<options>]

  Options:
    --help   Print usage
    --all    List all quotes

  Examples:
    $ quotist
    $ quotist --all

```

### Browser

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- replace [version] with actual version (i.e. 1.1.15) -->
    <script src="https://unpkg.com/quotist@[version]/dist/quotist.umd.min.js"></script>
  </head>

  <body>
    <script>
      // the umd file exposes the global `quotist`.
      console.log(quotist.all);
    </script>
  </body>
</html>
```

### Support this project

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

If you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the project
 - [![Donate](https://img.shields.io/badge/Donate-Paypal-brightgreen.svg?colorB=259cd2)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YKLGUUB34ASEL)—make one-time donations via PayPal.
 - [![Donate](https://img.shields.io/badge/Donate-Patreon-brightgreen.svg?colorB=f86213)](https://www.patreon.com/alexdevero)—set up monthly donation via Patreon and get interesting news about what I'm doing.
 - <img alt="bitcoin" src="https://img.shields.io/badge/Donate-Bitcoin-brightgreen.svg?colorB=fab915">—send bitcoins or ethereum to this address: `19jHGagJWeVvuNjN3kaBoAszXd9ea9gKzp`.

Thank you!

### Code of Conduct

[Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

### License

MIT © [Alex Devero](https://alexdevero.com).

<!-- source: https://github.com/electron/simple-samples/tree/master/url -->
