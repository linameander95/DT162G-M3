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
            let coursediv = document.getElementById("courses");
            coursediv.innerHTML += "<table id='coursetable'><th>Kurskod</th><th>Namn</th><th>Kursperiod</th><th> </th>";
            let coursetable = document.getElementById("coursetable");
            for (let i = 0; i < jsonData.length; i++) {
                let id = JSON.stringify(jsonData[i]._id);
                let code = jsonData[i].coursecode;
                let name = jsonData[i].coursename;
                let term = jsonData[i].courseterm;

                coursetable.innerHTML += "<td>" + code + "</td><td>" + name + "</td><td>" + term + "</td><td><a id='deletebtn' onclick='deleteCourse(" + id + ");'><i class='fa fa-trash' aria-hidden='true'></i></a></td>";
            };
            coursediv.innerHTML += "</table>";
        })
};



function addCourse() {
    let coursecode = document.getElementById("coursecode").value;
    let coursename = document.getElementById("coursename").value;
    let courseterm = document.getElementById("courseterm").value;
    let xhttp = new XMLHttpRequest();
    let senddata = {
        'coursecode': coursecode,
        'coursename': coursename,
        'courseterm': courseterm
    }
    console.log(coursecode, coursename, courseterm)
    xhttp.open("POST", "http://localhost:3000/courses/");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(senddata));
    console.log(JSON.stringify(xhttp.responseText));
}

function deleteCourse(id) {
    fetch('http://localhost:3000/courses/' + id, {
        method: 'DELETE',
    })
    location.reload();
};