'use strict';

const fs = require('fs');

// https://stackoverflow.com/a/41407246/7167015
const consoleColors = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",

    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",

    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m"
};

const getCurrentTime = () => {
    const date = new Date();

    let hour = date.getHours();
    hour = (hour < 10 ? '0' : '') + hour;

    let min  = date.getMinutes();
    min = (min < 10 ? '0' : '') + min;

    let sec  = date.getSeconds();
    sec = (sec < 10 ? '0' : '') + sec;

    return `${hour}:${min}:${sec}`;
};

const exitProcess = (msg) => {
    const {BgRed, FgBlack, Reset} = consoleColors;

    console.error(`${BgRed}${FgBlack}%s${Reset}`, `[${getCurrentTime()}] Inline Assets: ✘ ${msg}`);

    process.exit(1);
};

module.exports = (patternlab) => {
    if (!patternlab) {
        exitProcess('Pattern Lab not provided to plugin-init');
    }

    patternlab.engines.handlebars.engine.registerHelper('inline-asset', (file) => {
        const {FgCyan, Reset} = consoleColors;

        let content = '';

        try {
            console.info(`${FgCyan}%s${Reset}`, `→ Inlining asset "${file}" ...`);
            content = fs.readFileSync(file);
        } catch (e) {
            exitProcess(`No such file "${file}". Did you misspell something?`);
        }

        return content;
    });
};
