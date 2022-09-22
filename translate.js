const translate = require('@vitalets/google-translate-api');
const flatten = require('flat')
 
const MAX_TRANSLATE_LENGTH = 5000;

/**
 * Translates an object's values and returns the translated object.
 * 
 * @param {any} obj Object to be translated
 */
async function translateObject(obj, to) {
  const flattenedObj = flatten(obj);
  console.log(flattenedObj)

  // let translatedObject = {};
  // let stringToTranslate = '';
  // let lastKeyTranslated = undefined;
  // for (const key in obj) {
  //   if (Object.hasOwnProperty.call(obj, key)) {
  //     const value = obj[key];
  //     if (stringToTranslate.length + value.length >= MAX_TRANSLATE_LENGTH) {
  //       break;
  //     } 
  //     lastKeyTranslated = key;
  //     if (typeof value == 'string') {
  //       if (stringToTranslate.length) {
  //         stringToTranslate += '\n';
  //       }
  //       stringToTranslate += value;
  //     }
  //   }
  // }
  // //console.log(`stringToTranslate: ${stringToTranslate}`);

  // const translatedString = await translate(stringToTranslate, {to});
  // console.log(`translatedString: ${translatedString.text}`);
  // const parts = translatedString.text.split("\n");
  // let index = 0;
  // for (const key in obj) {
  //   if (Object.hasOwnProperty.call(obj, key)) {
  //     const value = obj[key];
  //     if (typeof value == 'string') {
  //       translatedObject[key] = parts[index++];
  //     }
  //   }
  // }
  // return translatedObject;
}

const EN_JSON = {
  "email": "Email",
  "username": "Username",
  "password": "Password",
  "signIn": "Sign In",
  "signUp": "Sign Up",
  "signOut": "Sign Out",
  "orSignInWith": "Or sign in with:",
  "appNeedsUpdate": "You're using an older version of the app. Please update and try again.",
  "loginAuthenticationError": "Unable to sign in. Please check your account information and try again.",
  "next": "Next",
  "save": "Save",
  "clear": "Clear",
  "done": "Done",
  "reset": "Reset",
  "selectAll": "Select All",
  "deselectAll": "Deselect All",
  "apply": "Apply",
  "change": "Change",
  "yes": "Yes",
  "no": "No",
  "create": "Create",
  "tryAgain": "Try Again",
  "type": "Type",
  "category": "Category",
  "profile": "Profile",
  "camera": "Camera",
  "gallery": "Gallery",
  "location": "Location",
  "report": "Report",
  "language": "Language",
  "profilePhotoError" : "Error setting profile picture",
  "attachments": "Attachments",  
  "noActivities": "This community does not have any activities yet.",
  "like": "Like",
  "confirmExitPrompt": "Are you sure you want to quit?",
  "information": "Information",
  "document": "Document",
  "documents": "Documents",
  "unsavedChangesWarning": "Lose changes?",
  "join": "Join",
  "searchCommunityHint": "Locate the community you wish to join by searching for it by its name and select it from the list below.",
  "searchCommunityPlaceholder": "Community Name",
  "joinRequestSubmitted": "Your request has been submitted. When it is approved, we will notify you.",
  "joinCommunityToGetStarted": "You are not a member of any community. Join a community to get started.",
  "pressAgainToQuit": "Press again to quit app.",
  "selectUnit": "Select Unit",
  "startOver": "Start Over",
  "noCommunitiesFound": "No communities found!",
  "ok": "Ok",
  "cancel": "Cancel",
  "submit": "Submit",
  "skip": "Skip",
  "you": "You",
  "date": "Date",
  "time": "Time",
  "close": "Close",
  "reopen": "Reopen",
  "telephone": "Telephone",
  "selectCountry": "Select Country",
  "firstName": "First name",
  "lastName": "Last name",
  "pin": "Security Code",
  "required": "Required",
  "recommented": "Recommended",
  "optional": "Optional",
  "recommentedOptional": "Recommended, optional",
  "alreadyHaveAnAccount": "Already have an account?",
  "getPIN": "Get Security Code",
  "country": "Country",
  "committee": "Committee",
  "committees": "Committees",
  "notYetSetup": "Not yet setup.",
};


translateObject(EN_JSON, 'zh-TW').then(zh => {
  console.log(`Translated EN.JSON to ZH: ${JSON.stringify(zh)}`);
}).catch(error => {
  console.error(error);
});


// translate('I can speak English', {to: 'zh-TW'}).then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });
