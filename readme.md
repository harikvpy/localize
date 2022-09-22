# Introduction

This is a small Node.js command line utility to translate a JSON file of 
text strings to an equivalent JSON file in another language using Google
Translate services.

# How to use
* Install the NPM dependencies
* Issue the command:

    ``
    $ node localize.js <input-json-path> <lang-code> [--output <output-json-path>]
    ``
  
  `lang-code` is one of the language codes as understood by the Google Translate
  as defined [here](https://cloud.google.com/translate/docs/languages). If `--output`
  option is omitted, the translation output will be sent to stdout.

# How does it work
The program first extracts all the string values of the given JSON file and
then uses the NPM package `@vitalets/google-translate-api` to translate
them to the specified language.

If the input JSON file has nested objects, these will be handled as well.

# Dependencies
* Node.js v14.x
* NPM packages
  * @vitalets/google-translate-api@^8.0.0
  * flat@^5.0.2
  * yargs@^17.5.1
