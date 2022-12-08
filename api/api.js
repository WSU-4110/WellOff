import { GoogleFit } from "react-native-google-fit";

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
    bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1. 
};

currTheme = "Blue";

//--END PRIVATE VARIABLES/FUNCTIONS

//--START PUBLIC FUNCTIONS--

/**Set the permissions on the Google Fit API
 * Contributors:
 * Matthew Meyer
 * 
 */
function SetGoogleFitStatus(value){
    if (value) {
        GoogleFit.authorize(options).then(authResult => {
            if (authResult.success) {
                dispatch("AUTH_SUCCESS");
            } else {
                dispatch("AUTH_DENIED", authResult.message);
            }
        })
            .catch(() => {
                dispatch("AUTH_ERROR");
            })
    }
    else{
        //write something
    }
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
 */
function GetGoogleFitStatus(){
    return true;
};

/**Get the daily step count from the Google Fit API
 * Contributors:
 * Matthew Meyer
 * 
 */
function getDailySteps(){
    return 0;
};

/**Get the daily step count from the Google Fit API
 * Contributors:
 * Matthew Meyer
 * 
 */
function getWeeklySteps(){
    return 0;
};

/**The themes available to the app
 * Contributers:
 * Matthew Meyer
 * 
 */
const themes = {
    "Blue":["#05445E", "#189AB4", "#75E6DA", "#D4F1F4"]
};

/**Get the theme the app is using
 * Contributers:
 * Matthew Meyer
 * 
 */
function GetTheme() {
    return themes.Blue; //change to get programatically from the theme string
};

/**The themes available to the app
 * Contributers:
 * Matthew Meyer
 * 
 */
function SetTheme(themeName){
    if (true){ //put theme name here. We can use hardcoded theme names
        currTheme = themeName;
    }
};

//--END FUNCTIONS--

export {
    //add functions to this export. this makes the functions "public"
    
    SetGoogleFitStatus,
    ToggleGoogleFitStatus,
    GetGoogleFitStatus,
    
    getDailySteps, 
    getWeeklySteps,

    Themes,
    GetTheme,
    SetTheme
};