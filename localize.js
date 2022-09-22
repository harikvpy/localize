const translate = require('@vitalets/google-translate-api');
const flatten = require('flat')
const unflatten = require('flat').unflatten;
const fs = require('fs');

const MAX_TRANSLATE_LENGTH = 5000;


/**
 * Read the given json file into a JSON object
 * @param {} filename 
 * @returns 
 */
async function readJson(filename) {
  return new Promise((res, rej) => {
    fs.readFile(filename, (err, data) => {
      if (err) rej(err);
      res(JSON.parse(data))
    })  
  })
}

/**
 * Write an object as json to <filename>.
 * @param {*} obj 
 * @param {*} filename 
 * @returns 
 */
async function writeJson(obj, filename) {
  const jsonObj = JSON.stringify(obj, null, 2);
  return new Promise((res, rej) => {
    fs.writeFile(filename, jsonObj, err => {
      if (err) {
        rej(err);        
      } else {
        res();
      }
    });
  });
}

/**
 * Translates an object's values and returns the translated object.
 * 
 * @param {any} obj Object to be translated
 */
async function translateObject(obj, to) {
  let keys = [];
  let values = []
  for (const key in obj) {
    const value = obj[key]
    if (typeof value === 'string') {
      keys.push(key);
      values.push(obj[key]);
    }
  }

  let lastIndex = 0;
  let translatedObj = {};
  while (lastIndex < keys.length-1) {
    let stringToTranslate = '';
    for (let index = lastIndex; index < keys.length; index++) {
      const value = values[index];
      if (stringToTranslate.length) {
        stringToTranslate += '\n';
      }
  
      if (stringToTranslate.length + value.length >= MAX_TRANSLATE_LENGTH) {
        break;
      } 
      stringToTranslate += value;
      lastIndex = index;
    }
    // console.log(`Translating till ${lastIndex}, total strings: ${keys.length}`);
    const translatedString = await translate(stringToTranslate, {to});
    const parts = translatedString.text.split("\n");
    for (let index = 0; index < parts.length; index++) {
      translatedObj[keys[index]] = parts[index];      
    }
    // console.log(`Translated obj: ${JSON.stringify(translatedObj, null, 2)}`);
  }
  return translatedObj;
}

const args = require('yargs').argv;

if (args._.length < 2) {
  console.log(`\nUsage:\n  translate <json file> <to lang> --output <output_file>\n  If --output is not specified, translated json is written to stdout.`);
  process.exit(1);
}

// Crux of the program
readJson(args._[0]).then(obj => {
  const flattenedObj = flatten(obj);
  return translateObject(flattenedObj, args._[1])
}).then(translate => {
  const unflattedObj = unflatten(translate);
  if (args.output || args.o) {
    return writeJson(unflattedObj, args.output || args.o);
  } else {
    console.log("\n" + JSON.stringify(unflattedObj, null, 2));
  }
}).then(() => {
  if (args.output || args.o) {
    console.log(`${process.argv[2]} translated to ${process.argv[3]} and written to ${args.output || args.o}.`);
  }
}).catch(err => {
  console.warn(`Error while translating ${process.argv[2]} to ${process.argv[3]}: ${err}`);
});
