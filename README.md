# Inline Assets Plugin for Pattern Lab Node

[![npm](https://img.shields.io/npm/v/plugin-node-patternlab-inline-assets.svg?maxAge=86400)](https://www.npmjs.com/package/plugin-node-patternlab-inline-assets) 
[![npm](https://img.shields.io/npm/dt/plugin-node-patternlab-inline-assets.svg?maxAge=86400)](https://www.npmjs.com/package/plugin-node-patternlab-inline-assets) 
[![Buy me a beer!](https://img.shields.io/badge/Buy%20me%20a%20beer!-%F0%9F%8D%BA-yellow.svg)](https://www.paypal.me/Miw0)

> The Inline Assets Plugin for [Pattern Lab Node](https://github.com/pattern-lab/patternlab-node) can be used to inline assets into your templates.

## Installation

Add the Inline Assets Plugin to your project using [npm](http://npmjs.com/):

    npm install --save handlebars-inline
 
After that tell Pattern Lab to install the plugin:

    gulp patternlab:installplugin --plugin=plugin-node-patternlab-inline-assets
    
Wich will install and enable the plugin. You're now ready to use it.

## Usage
Use 3 curly brackets to tell handlebars to stop escaping, then call the inline plugin and pass a path to your asset.

    {{{inline-asset 'source/icons/arrow-down.svg'}}}
    
Your asset will then be inlined into your template before compiling.

***

## Thanks

The Inline Assets Plugin for [Pattern Lab Node](https://github.com/pattern-lab/patternlab-node) was created and is maintained by [Michael Worm](https://github.com/Miw0).
