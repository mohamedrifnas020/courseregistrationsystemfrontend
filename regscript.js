function showcourses(){

fetch("https://3.109.184.245/courses")
.then((Response) => Response.json())
.then((courses)=>{

const table= document.getElementById("coursetable")

courses.forEach(course => {

    var row =  `<tr>
    <td>${course.courseid}</td>
    <td>${course.coursename}</td>
    <td>${course.trainer}</td>
    <td>${course.durationinweeks}</td>
  </tr>`
    
    table.innerHTML+=row;
});

});

};