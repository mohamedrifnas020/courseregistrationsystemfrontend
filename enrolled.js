function showenrolledstd(){

fetch("https://ski-contractor-wedding-knowledge.trycloudflare.com /courses/enrolled" )
.then((Response)=> Response.json())
.then((enrolledstudents)=>{


    const enrolledtable=document.getElementById("enrolledstudent")

    enrolledstudents.forEach(enrolledstudent => {

        var row =`<tr>
        <td>${enrolledstudent.name}</td>
        <td>${enrolledstudent.emailid}</td>
        <td>${enrolledstudent.coursename}</td>
        
        
        
        
        </tr>`

        enrolledtable.innerHTML+=row;
        
    });
});





};