const getStudents = async() => {
    let response = await fetch("http://127.0.0.1:5000/students")
    let data = await response.json()
    let ul = document.getElementById('student-list')
    for (student of data) {
        let li = document.createElement("li")
        li.innerText=`Student Name: ${student.first_name} ${student.last_name}`
        ul.appendChild(li)
    }
}

getStudents()