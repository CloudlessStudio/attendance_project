let student_list = [];


function add_student(){
    const s_name = document.getElementById("Student-name").value; //get student name input
    if(s_name!=""){
        const s_group = document.getElementById("s_group"); //get ref to our students group
        const s_div = document.createElement("div"); //create new div
        s_div.classList.add("name"); //add 'name' name to our div
        const s_rem_button = document.createElement("button"); //adding button to our div
        s_rem_button.innerHTML = "X"; //adding x visual to our remove button
        const s_div_p = document.createElement("p"); //create text value in our element
        s_div_p.innerText = s_name; //add value to our paragraph
    
        s_div.append(s_rem_button); //add button to div
        s_div.append(s_div_p); //add name to div
        s_group.append(s_div); //add div to group
        student_list.push(s_name); //add student to our list
        document.getElementById("Student-name").value = ""; //clear input field
    
        s_rem_button.addEventListener("click", event =>{ //remove a name on remove button click
        s_div.remove();         
        for(let i = 0; i<student_list.length; i++){  //remove name from list
            if(student_list[i]==s_name){
                student_list.splice(i,1);
            }
        }
        })
    }


console.log(student_list);

}