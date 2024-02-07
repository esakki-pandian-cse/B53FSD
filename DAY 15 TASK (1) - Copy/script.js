function submitForm(){
    // getting the value from html using dom
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const addresstext = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gendertype = document.querySelector('input[name="gender"]:checked').value;
    const food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value);
    const stateName = document.getElementById('state').value;
    const countryName = document.getElementById('country').value;
    const table = document.getElementById("table");

    //appending form to table
    let row     = table.insertRow(-1);
    let fname   = row.insertCell(0);
    let lname   = row.insertCell(1);
    let gender  = row.insertCell(2);
    let foods   = row.insertCell(3);
    let address = row.insertCell(4);
    let state   = row.insertCell(5);
    let country = row.insertCell(6);
    let pin     = row.insertCell(7);
    fname.innerHTML = firstName;
    lname.innerHTML = lastName;
    gender.innerHTML = gendertype;
    foods.innerHTML = food;
    address.innerHTML = addresstext;
    state.innerHTML = stateName;
    country.innerHTML = countryName;
    pin.innerHTML = pincode;
    

    // reset the form
    document.getElementById('myForm').reset();
}