import GoogleFit, { Scopes } from 'react-native-google-fit'

/**How to edit the API
 * - The API runs off of: fetch('http://localhost:8081/api/AppSettings.js/[function aka route]', {[code here]]} ) ;
 *      - NOTE: where "code here" should look like the other functions in this file.
 * - The req variable is the information coming from the user.
 * - The res variable is the information you want to send back to the client.
 */

var express = require('express');
var router = express.Router();

/**Contributors:
 * Matthew Meyer
 */
const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
    ],
};

/**Contributors:
 * Matthew Meyer
 */
const DailyStepsOPT = {
    startDate: new Date().toISOString(), // required ISO8601Timestamp
    endDate: new Date().toISOString(), // required ISO8601Timestamp
    bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1. 
};

/**Contributors:
 * Matthew Meyer
 */
router.get('/dark-mode-status', function(req, res){
    res.json({status: darkModeEnabled});
});

/**Contributors:
 * Matthew Meyer
 */
router.get('/google-fit-status', function(req, res){
    res.json({status: GoogleFit.isAuthorized})
});

/**Contributors:
 * Matthew Meyer
 */
router.set('/set-google-fit-status', function(req, res){
    if (!req.body.enabled){
        res.status(400);
        res.json({message: "Bad Request"});
    }
    else {
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
});

/**Contributors:
 * Matthew Meyer
 */
router.get('/get-todays-steps', function(req, res)){
    GoogleFit.getDailyStepCountSamples()
    .then((gay) => {
        res.json(gay);
        console.log(res);
    })
    .catch((err) => {console.warn(err)});

}

module.exports = router;