//Name:       Rohan Mane
//Trainee ID: TS047

//Task name: TS047_RohanMane_JavaScriptSession_Day3
//Task ID:   2144

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Hard coded input of two numbers
var num1 = 3;
var num2 = 3;

//GUI display of available choices
console.log("Choices: ");
console.log("1. If-else");
console.log("2. If-else-if");
console.log("3. Switch");
console.log("4. Break/Jump");

//Hard coded input and display of selected choice
var choice = 1;
console.log("Selected choice: " + choice);

//Switch case for choice
switch(choice) {

    //IF-ELSE
    case 1: if(num1 > num2) console.log("Number 1 is greater than Number 2");
            else console.log("Number 2 is greater than Number 1");
            break;

    //IF-ELSE-IF
    case 2: if(num1 < num2) console.log("Number 1 is less than Number 2");
            else if(num1 > num2) console.log("Number 1 is greater than Number 2");
            else console.log("Number 1 is equal to Number 2");
            break;

    //SWITCH
    case 3: 
            switch(num1 > num2) {
                case true: console.log("Number 1 is greater than Number 2");
                break;
                case false: console.log("Number 2 is greater than Number 1");
                break;
                default: console.log("Number 1 is equal to Number 2");
            }
    
    //DEFAULT
    default: console.log("Invalid choice");
            break;
}