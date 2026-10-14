function validate() {
    let ids = [
        "name", "father", "mother", "dob",
        "email", "mobile", "address", "course",
        "semester", "photo", "password"
    ];

    // Check whether all fields are filled
    for (let id of ids) {
        let field = document.getElementById(id);

        if (field.value.trim() === "") {
            alert("Please fill all fields");
            field.focus();
            return false;
        }
    }

    // Check gender selection
    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!gender) {
        alert("Please select Gender");
        return false;
    }

    // Check mobile number
    let mobile = document.getElementById("mobile").value;

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number");
        return false;
    }

    // Check semester
    let sem = Number(
        document.getElementById("semester").value
    );

    if (!Number.isInteger(sem) || sem < 1 || sem > 8) {
        alert("Semester must be between 1 and 8");
        return false;
    }

    alert("Registration Successful!");
    return true;
}