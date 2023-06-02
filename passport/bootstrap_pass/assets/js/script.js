//$(document).ready(function(){
//  $('#birth-date').mask('00/00/0000');
//  $('#phone-number').mask('0000-0000');
//})



//SCROLL BAR
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//VALIDATIONS

function validate() {
  //file_num_validate();
  module1_validate();
  module2_validate();

}
function file_num_validate() {
  var fileNumber = document.getElementById('file_number').value;
  var doi = document.getElementById('dateofissue').value;
  
  // Check if file number is empty
  if (fileNumber === "") {
      alert("Please enter a file number.");
      getElementById('file_number').focus();
      return false;
  }

  // Check if file number is less than 12 characters
  if(fileNumber.length < 12) {
      alert("File number should not be less than 12 characters.");
      getElementById('file_number').focus();
      return false;
  }

  // Check if file number is more than 12 characters
  if(fileNumber.length > 12) {
      alert("File number should not be more than 12 characters.");
      getElementById('file_number').focus();
      return false;
  }

  // Check if file number contains special characters (!, @, £, $, &)
  var special_char = /[!@£$&]/;
  if (special_char.test(fileNumber)) {
      alert("File number should not contain special characters.");
      getElementById('file_number').focus();
      return false;
  }

  // Check if file number is alphanumeric
  if(fileNumber!==/^[a-zA-Z0-9]/) {
      alert("File number should be alphanumeric.");
      getElementById('file_number').focus();
      return false;
  }
  
  // Check if the character at first position is an alphabet
//                if(fileNumber.charAt(0)!== /^[A-Za-z]+$/) {
//                    alert("File number should start with an alphabet.");
//                    //getElementById('file_number').focus();
//                    fileNumber.focus();
//                    return false;
//                }

  // Check if last two digits of file number correspond with last two digits of year (YYYY) in date of issue
  if(fileNumber[10]!==doi[10]) {
      alert("Last two digits of filenumber do not match with year of issue.");
      doi.focus();
      return false;
  }
  if(fileNumber[11] !== doi[10]) {
      alert("Last two digits of filenumber do not match with year of issue.");
      doi.focus();
      return false;
  }
  return true;
}

function module1_validate() {
  //Hide "1.2 Reason for re-issue" when fresh passport radiobutton is selected.
  if(document.getElementsById('fresh_passport').checked === true) {
      document.getElementById('section1.2').style.display = "none";
  }
  
  //Hide "1.3 If changes in existing personal particulars, specify reason(s)" when "change in personal particulars" is not selected in section 1.2
  if(document.getElementId('section1.2.change').checked !== true) {
      document.getElementById('section1.3').style.display ="none";
  }
}

function module2_validate() {

  //Check if 2.1 Applicant's name has special characters
  var applicant_name = document.getElementbyId('applicant_name').value;     //Define a variable which points to 2.1 Applicant's name
  var special_char = /[!@£$&]/;
  if(special_char.test(applicant_name)) {
      alert("Applicant's name cannot contain special characters.");
      applicant_name.focus();
      return false;
  }

  //Check if 2.1 Applicant's name is alphanumeric
  if(applicant_name === /^[a-zA-Z0-9]/) {
      alert("Applicant's name cannot be alphanumeric.");
      applicant_name.focus();
      return false;
  }
  
  //Check if 2.1 Applicant's name is only alphabets
  if(applicant_name !== /[A-Za-z]/) {
      alert("Applicant's name should only contain letters.");
      applicant_name.focus();
      return false;
  }

  // 2.1 Applicants surname
  var applicant_surname = document.getElementById('applicant_surname').value;
  // Check if 2.1 Applicant's surname has special characters
  if(special_char.test(applicant_surname)) {
      alert("Applicant's surname cannot contain special characters.");
      applicant_surname.focus();
      return false;
  }

  //Check if 2.1 Applicant's surname is alphanumeric
  if(applicant_surname === /^[a-zA-Z0-9]/) {
      alert("Applicant's surname cannot be alphanumeric.");
      applicant_surname.focus();
      return false;
  }
  
  //Check if 2.1 Applicant's surname is only alphabets
  if(applicant_surname !== /[A-Za-z]/) {
      alert("Applicant's surname should only contain letters.");
      applicant_name.focus();
      return false;
  }

  //2.5 Place of birth
  var pob = document.getElementById('pob').value;
  var pob_dis = document.getElementById('pob_dis').value;
  var pob_state = document.getElementById('pob_state').value;
  var pob_country = document.getElementById('pob_country').value;
  //Check if district, state and country have same values.
  if(pob_dis === pob_state === pob_country) {
      alert("District, State and Country cannot have same values.");
      pob.focus();
      return false;
  }

  //2.10 Voter ID
  var vot_id = document.getElementById('vot_id').value;

  //Check if 2.10 Voter ID has special characters
  if(special_char.test(vot_id)) {
      alert("Voter ID cannot contain special characters.");
      vot_id.focus();
      return false;
  }

  //Check if 2.10 Voter ID has lowercase alphabets
  if(vot_id === /^[a-z0-9]/) {
      alert("Voter ID cannot have lowercase characters.");
      vot_id.focus();
      return false;
  }
  
  //Check if 2.10 Voter ID is only uppercase alphabets and numbers
  if(applicant_surname !== /[A-Z0-9]/) {
      alert("Voter ID must have uppercase alphabets and numbers.");
      vot_id.focus();
      return false;
  }

  //

}