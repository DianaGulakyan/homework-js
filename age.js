function calculateAge() {
    let data = document.getElementById("data").value;
    if (!data) {
      document.getElementById("result").innerText = "Please enter your date of birth.";
      return;
    }
  
    let birthDate = new Date(data);
    let today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    document.getElementById("result").innerText = "Your age is " + age + " years old";
  }
  