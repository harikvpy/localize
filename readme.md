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

# How does it work
The program first extracts all the string values of the given JSON file and
then uses uses the the NPM package `@vitalets/google-translate-api` to translate
them to the specified language.

If the input JSON file has nested objects, these will be handled as well.

# Dependencies
* Node.js v14.x

# To do
* Extend this for PO files.