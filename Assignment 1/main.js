// Well done, Josh.  Your application works as required and validates the
// input will - even looking for the '@' for the email.  Everything appears
// to be named correctly.  I won't take a mark off for this, but I'll suggest
// that your validation messages be more intuitive - your email validation
// says 'Enter a valid name' which could actually confuse the user.  Great works
// otherwise
// 10/10

function loadProvinces() {
  var provs = document.getElementById("cboProv");

  var provArray = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "Nunavut",
    "Northwest Territories",
    "New Brunswick",
    "Nova Scotia",
    "Quebec",
    "Ontario",
    "Prince Edward Island",
    "Newfoundland and Labrador",
    "Yukon"
  ];

  var cboProv = document.getElementById("cboProv");
  var option = document.createElement("option");
  option.text = "-Select-";
  option.value = "";
  cboProv.add(option);

  for(i = 0; i < provArray.length; i++) {
    var option = document.createElement("option");
    option.text = provArray[i];
    option.value = provArray[i];
    cboProv.add(option);
  }
}

//No comment

function validateForm() {
  var selected = cboProv.options[cboProv.selectedIndex].value;
  var output = document.getElementById("output");
  var name = document.getElementById("txtName");
  var email = document.getElementById("txtEmail");
  if(selected === "") {
    output.style.color = "red";
    output.innerHTML = "Select a Province/Territory";
    cboProv.focus();
  } else if (name.value === "") {
    output.style.color = "red";
    output.innerHTML = "Enter a name";
    name.focus();
  } else if (email.value === "" || !email.value.includes("@")) {
    output.style.color = "red";
    output.innerHTML = "Enter a valid name";
    email.focus();
  } else {
    output.style.color = "black";
    output.innerHTML = "";
  }
}
