/* eslint-disable prettier/prettier */


export var steps = 6000;
export var stepsGoal = 8000;
export var screen = 2;
export var screenGoal = 3;
export var sleep = 6;
export var sleepGoal = 8;
export var currentUser = 'Farid';
export var currentPicture = "https://bootdey.com/img/Content/avatar/avatar6.png";

export var stepsGraph = steps/stepsGoal;
export var screenGraph = screen/screenGoal;
export var sleepGraph = sleep/sleepGoal;

export function setNumber(inp){
    ({screen} = inp);
  }
