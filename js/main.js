// CONTACT LIST
var elForm = document.querySelector(".js-form");
var elContactList = document.querySelector(".js-contact-list");
var elContactInputName = elForm.querySelector(".js-input-name");
var elContactInputInfo = elForm.querySelector(".js-input-info");
var elContactInputPhoneNumber = elForm.querySelector(".js-input-phone-number");
var contactListArr = [];

// ADDING CONTACT TO CONTACT LIST ARRAY
var createContactObject = function () {

}

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("event");
  var contact =  {
    name: elContactInputName.value,
    info: elContactInputInfo.value,
    number: elContactInputPhoneNumber.value
  }
  contactListArr.push(contact);
  elContactList.innerHTML =  "";
  var elContactListFragment = document.createDocumentFragment();
  for(var i = 0; i < contactListArr.length; i++){

    var eLcontactOutput = document.createElement("div");
    eLcontactOutput.classList.add("contact-item");
    var eLcontactOutputName = document.createElement("p");
    var eLcontactOutputInfo = document.createElement("p");
    var eLcontactOutputPhoneNumber = document.createElement("p");
    eLcontactOutputName.textContent = contactListArr[i].name;
    eLcontactOutputInfo.textContent = contactListArr[i].info;
    eLcontactOutputPhoneNumber.textContent = contactListArr[i].number;
    eLcontactOutput.appendChild(eLcontactOutputName);
    eLcontactOutput.appendChild(eLcontactOutputInfo);
    eLcontactOutput.appendChild(eLcontactOutputPhoneNumber);
    elContactListFragment.appendChild(eLcontactOutput);
    console.log(contactListArr[i]);
  }

  elContactList.appendChild(elContactListFragment);

  // elContactList.appendChild();

});
