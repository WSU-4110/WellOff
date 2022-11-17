import GoogleFit, { Scopes } from 'react-native-google-fit'

var express = require('express');
var router = express.Router();

const options = {
    scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
    ],
  }

router.get('/dark-mode-status', function(req, res){
    res.json({status: darkModeEnabled});
});

router.get('/google-fit-status', function(req, res){
    res.json({status: GoogleFit.isAuthorized})
});

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

router.get('/get-todays-steps', function(req, res)){
    res.json()
}

//Routes will go here
module.exports = router;