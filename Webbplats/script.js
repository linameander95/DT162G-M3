//Send get request to the API to display all the courses
function getCourses() {
    let url = 'http://localhost:3000/courses/';
    fetch('http://localhost:3000/courses/', {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((response) => response.json())
        .then((jsonData) => {
            let coursediv = document.getElementById("courses"); //Getting the element in which I want to place my data
            coursediv.innerHTML += "<table id='coursetable'><th>Kurskod</th><th>Namn</th><th>Kursperiod</th><th> </th>"; //Creating the beginning of the table with headings
            let coursetable = document.getElementById("coursetable");
            for (let i = 0; i < jsonData.length; i++) { //Formatting all the data for each object into the table using a for loop
                let id = JSON.stringify(jsonData[i]._id);
                let code = jsonData[i].coursecode;
                let name = jsonData[i].coursename;
                let term = jsonData[i].courseterm;

                coursetable.innerHTML += "<td>" + code + "</td><td>" + name + "</td><td>" + term + "</td><td><a id='deletebtn' onclick='deleteCourse(" + id + ");'><i class='fa fa-trash' aria-hidden='true'></i></a></td>";
            };
            coursediv.innerHTML += "</table>";
        })
};


//Send post request to the API to add a new course
function addCourse() {
    //Creating variables for the different values to be edited
    let coursecode = document.getElementById("coursecode").value;
    let coursename = document.getElementById("coursename").value;
    let courseterm = document.getElementById("courseterm").value;
    let xhttp = new XMLHttpRequest();
    let senddata = { //Formatting the data within a variable
        'coursecode': coursecode,
        'coursename': coursename,
        'courseterm': courseterm
    }
    console.log(coursecode, coursename, courseterm)
    xhttp.open("POST", "http://localhost:3000/courses/");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(senddata)); //Sending the formatted data to the API
    console.log(JSON.stringify(xhttp.responseText));
}
//Function to delete a course via fetch request using the method DELETE
function deleteCourse(id) {
    fetch('http://localhost:3000/courses/' + id, {
        method: 'DELETE',
    })
    location.reload();
};