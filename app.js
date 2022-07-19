// Function to split the email and put it on the webpage
const handleClick = () => {
  const email = document.getElementById("email").value;
  const emailSplit = email.split("@");
  document.getElementById("username").innerHTML = `Username: ${emailSplit[0]}`;
  document.getElementById("domain").innerHTML = `Domain: ${emailSplit[1]}`;

  console.log(emailSplit[0]);
};

const buttons = ["Split Email"];

// for loop to create buttons
for (let i = 0; i < buttons.length; i++) {
  const button = document.createElement("button");
  button.innerHTML = buttons[i];
  button.addEventListener("click", handleClick);
  button.classList.add("btn", "btn-outline-success");
  document.getElementById("buttons").appendChild(button);
}
