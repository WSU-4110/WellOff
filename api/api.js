import { BucketUnit, GoogleFit, Scopes } from "react-native-google-fit";

/** How to use this API
 *  -   This API is just a middle connector for a backend that may or
 *      may not exist.
 *  -   Editing should be easy, as there will be example code/jsons
 *      placed throughout.
 */

//--START PRIVATE VARIABLES/FUNCTIONS--

/**The options for google fit.
 * Contributors:
 * Matthew Meyer
 * 
 */
 const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
    ],
};

/**Cosntant options for daily steps.
 * Contributors:
 * Matthew Meyer
 * 
 */
 const DailyStepsOPT = {
    startDate: new Date().toISOString(), // required ISO8601Timestamp
    endDate: new Date().toISOString(), // required ISO8601Timestamp
    BucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1. 
};

currTheme = "Blue";

//--END PRIVATE VARIABLES/FUNCTIONS

//--START PUBLIC FUNCTIONS--

/**Set the permissions on the Google Fit API.
 * Contributors:
 * Matthew Meyer
 * 
 * @param { Boolean } value True = enabled; False = disabled.
 * @returns A boolean value whether it was able to enable or disable google fit.
 */
function SetGoogleFitStatus(value){
    if (value) {
        GoogleFit.authorize(options).then(authResult => {
            if (authResult.success) {
                return true;
            }
        })
            .catch(() => {
                //handle error later :)
            })
    }
    
    return false; //default case
};

function ToggleGoogleFitStatus(){
    if (true){
        //write something
    }
    else{
        //write something
    }
};

/**Retrieve the status of whether the API is enabled or not.
 * Contributors:
 * Matthew Meyer
 * 
 * @returns A boolean value for the status of Google fit.
 */
function GetGoogleFitStatus(){
    return true;
};

/**Get the daily step count from the Google Fit API.
 * Contributors:
 * Matthew Meyer
 * 
 * @returns A numerical value of the daily steps.
 */
function GetDailySteps(){
    return 0;
};

/**Get the daily step count from the Google Fit API.
 * Contributors:
 * Matthew Meyer
 * 
 * @returns A numerical value of the weekly steps.
 */
function GetWeeklySteps(){
    return 0;
};

/**The default themes available to the app.
 * Contributers:
 * Matthew Meyer
 * 
 */
const Themes = {
    "Blue":["#05445E", "#189AB4", "#75E6DA", "#D4F1F4"]
};

/**Retrieve the theme the app is using.
 * Contributers:
 * Matthew Meyer
 * 
 * @returns The theme name.
 */
function GetTheme() {
    return "Blue"; //change to get programatically from the theme string
};

/**Set the theme from the available app defaults with variable "Themes"
 * Contributers:
 * Matthew Meyer
 * 
 * @param { String } themeName
 */
function SetTheme(themeName){
    if (true){ //put theme name here. We can use hardcoded theme names
        currTheme = themeName;
    }
};

/**Checks to see if the username and password match what is stored. 
 * Contributers:
 * Matthew Meyer
 * 
 * @param {String} user 
 * @param {String} password 
 * @returns True if it matches, false if it doesnt.
 */
function Login(user, password){
    if (user == "mattyb"){
        if (password == "rocks"){
            return true;
        }
    }

    return false; //defualt case
}

//--END FUNCTIONS--

export {
    //add functions to this export. this makes the functions "public"
    
    SetGoogleFitStatus,
    ToggleGoogleFitStatus,
    GetGoogleFitStatus,
    
    GetDailySteps, 
    GetWeeklySteps,

    Themes,
    GetTheme,
    SetTheme
};