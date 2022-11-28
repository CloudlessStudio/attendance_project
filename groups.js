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


function make_groups(){
    const g_num = document.getElementById("group_number").value; //get number of groups
    const g_num_int = parseInt(g_num); //convert to int
    if(g_num_int>student_list.length){ //if more groups than students it wont work
        alert("too many groups");
    }
    else{
       // console.log(g_num_int);
        const groups = document.getElementById("random-group"); //get container for our groups
    
        let ppl_num = student_list.length/g_num_int; //get students / groups
    
        ppl_num = Math.ceil(ppl_num); //round up
        let idx = 0; //keep track of index
        let group_count = 1; //count group num
        for(let i = 0; i<g_num_int; i++){
            const group_div = document.createElement("div"); //create div for groups
            group_div.classList.add("group"); //name our groups
            group_div.innerText = "Group "+ group_count; //add numbers to groups
            groups.append(group_div); //add to main container
            for(j=0; j<ppl_num; j++){
                const member = document.createElement("p"); //add paragraphs based on the ppl number
                member.innerText = student_list[idx]; //add the correct student to group
                group_div.append(member); //add this stuff tour our group div
                idx++;
                if(idx == student_list.length){ //if we reach the end, stop
                    break;
                }
            }
            group_count++;
    
        }
    }


}