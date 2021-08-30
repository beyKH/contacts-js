// CONTACT VARS FROM DOC
var elForm = document.querySelector(".js-form");
var elContactList = document.querySelector(".js-contact-list");
var elContactInputName = elForm.querySelector(".js-input-name");
var elContactInputInfo = elForm.querySelector(".js-input-info");
var elContactInputPhoneNumber = elForm.querySelector(".js-input-phone-number");
var contactListArr = [];


// ADDING CONTACT TO CONTACT LIST ARRAY
var createContactObject = function () {
  var contact =  {
    name: elContactInputName.value,
    info: elContactInputInfo.value,
    number: elContactInputPhoneNumber.value
  }
  contactListArr.push(contact);

  return contactListArr;
}

// FINDING IS NUMBER REPEATED
var isNumberRepeated = function () {
  let isRepeated = false;
   for( var i = 0; i < contactListArr.length; i++){
    if (elContactInputPhoneNumber.value === contactListArr[i].number) {
      isRepeated = true;
      break;
    }
  }
  if (isRepeated === false){
    return 1;
  }else{
    return 0 ;
  }
}

// FORM SUBMITION
elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // CHEKING WHETHER NUMBER IS REPEATED
  if ( isNumberRepeated() === 1 ) {
    createContactObject();
  }

  // CLEANING LIST OF CONTACT
  elContactList.innerHTML =  "";
  // FRAGMENT CREATING
  var elContactListFragment = document.createDocumentFragment();

  for(var i = 0; i < contactListArr.length; i++){

    // CREATING ELEMENTS
    var eLcontactOutput = document.createElement("div");
    eLcontactOutput.classList.add("contact-item");
    var eLcontactOutputName = document.createElement("p");
    var eLcontactOutputInfo = document.createElement("p");
    var eLcontactOutputPhoneNumber = document.createElement("a");
    elContactInputPhoneNumber.setAttribute("href", "#")
    //ADDING AND GIVING TEXT CONTECT TO OUTPUT
    eLcontactOutputName.textContent = contactListArr[i].name;
    eLcontactOutputInfo.textContent = contactListArr[i].info;
    eLcontactOutputPhoneNumber.textContent = contactListArr[i].number;
    eLcontactOutput.appendChild(eLcontactOutputName);
    eLcontactOutput.appendChild(eLcontactOutputInfo);
    eLcontactOutput.appendChild(eLcontactOutputPhoneNumber);
    elContactListFragment.appendChild(eLcontactOutput);

  }

  elContactList.appendChild(elContactListFragment);
  // elContactList.appendChild();

});

// document.getElementById("myAnchor").setAttribute("href", "https://www.w3schools.com");
