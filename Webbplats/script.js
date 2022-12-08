function getCourses() { 
    fetch('http://localhost:3000/courses') 
        .then((response) => response.json()) 
        .then((jsonData) =>
        { 
            let coursediv = document.getElementById("courses");
            coursediv.innerHTML += "<table id='coursetable'><th>ID</th><th>Namn</th><th>Läsperiod</th><th> </th>";
            let coursetable = document.getElementById("coursetable");
            for (let i = 0; i < jsonData.length; i++) { 
                coursetable.innerHTML += "<td>" + jsonData[i].courseId + "</td>" + "<td>" + jsonData[i].courseName + "</td>" + "<td>" + jsonData[i].coursePeriod + "</td><td><a onclick='deleteCourse(" + jsonData[i].id + ")'><i class='fa fa-trash' aria-hidden='true'></i></a></td>";
        };
        coursediv.innerHTML += "</table>";
    })};

    function deleteCourse(id) {
        fetch('http://localhost:3000/courses/' + id, {
            method: 'DELETE',
          })
          location.reload();
    };

    getCourses();