/* eslint-disable prettier/prettier */
var steps = 6000;
var stepsGoal = 8000
var screen = 2;
var screenGoal = 3;
var sleep = 6;
var sleepGoal = 8;
var currentUser = 'Farid';
var currentPicture = "https://bootdey.com/img/Content/avatar/avatar6.png";
var stepsGraph = steps/stepsGoal;
var screenGraph = screen/screenGoal;
var sleepGraph = sleep/sleepGoal;

export {steps};
export {stepsGoal};
export {screen};
export {screenGoal};
export {sleep};
export {sleepGoal};
export {currentUser};
export {currentPicture};

export  {stepsGraph} ;
export  {screenGraph} ;
export  {sleepGraph};

export function setStepGoal(inp){
  (stepsGoal = inp);
}


export function setSleepGoal(inp){
  (sleepGoal = inp);
}

export function setScreenGoal(inp){
  (screenGoal = inp);
}

export function setUserName(inp){
  (currentUser = inp);
}

export function setUri(inp){
  (currentUser = inp);
}