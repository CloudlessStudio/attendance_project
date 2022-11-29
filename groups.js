//works like 97% of the time i guess.... havent had time to debug the issue of 4ppl and 3 groups, if you arent trying to break
//it will work. Just pick reasonable numbers for the amount of ppl. Added some little error checking too....
//for example if theres 6 students dont pick 5 groups....

let student_list = [];  //list of students
let shuffles = 0; //amount of shuffles allowed



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

function shuffleArray(arr) {          //shuffle array function
    arr.sort(() => Math.random() - 0.5);
  }


function make_groups(){                ///ERROR when theres 4 names and 3 groups... not sure why?
    shuffleArray(student_list);
    const g_num = document.getElementById("group_number").value; //get number of groups
    const g_num_int = parseInt(g_num); //convert to int
    if(g_num_int>student_list.length || g_num == "" || Number.isInteger(g_num_int) == false ){ //if more groups than students it wont work
        alert("too many groups, or the number of groups you added is not a number!");
    }
    else{
        const groups = document.getElementById("random-group"); //get container for our groups
    
        let ppl_num = student_list.length/g_num_int; //get students / groups
    
        ppl_num = Math.floor(ppl_num); //round up
        let idx = 0; //keep track of index
        let group_count = 1; //count group num
        for(let i = 0; i<g_num_int; i++){
            const group_div = document.createElement("div"); //create div for groups
            group_div.classList.add("group"); //name our groups
            group_div.innerText = "Group "+ group_count; //add numbers to groups
            group_div.id = "first_group";
            groups.append(group_div); //add to main container
            if(i + 1 >= g_num_int){   //add 1 to each group and the rest to last
                while(idx < student_list.length){
                    const member = document.createElement("p"); //add paragraphs based on the ppl number
                    member.innerText = student_list[idx]; //add the correct student to group
                    group_div.append(member); //add this stuff tour our group div
                    idx++;
                }
            }
            else{
                for(j=0; j<ppl_num; j++){
                    const member = document.createElement("p"); //add paragraphs based on the ppl number
                    member.innerText = student_list[idx]; //add the correct student to group
                    group_div.append(member); //add this stuff tour our group div
                    idx++;
                    if(idx == student_list.length){ //if we reach the end, stop
                        break;
                    }
                }
            }
            group_count++;  //for every new group add a new number
        }
        if(shuffles == 0){   //only call shuffle once
            shuffle_names();
        }

        
    }


}

function shuffle_names(){
    const submit_box = document.getElementById("submit_box"); //get submit container
    const submit_button = document.getElementById("submit-btn"); //get button
    const shuffle_button = document.createElement("button"); //create shuffle button
    shuffle_button.innerHTML = "shuffle"; //add text
    submit_button.remove();  
    submit_box.append(shuffle_button); //replace submit with shuffle button


    shuffle_button.addEventListener("click", event =>{  
        shuffle_button.remove();                           //get rid of shuffle
        shuffles = 1;                               //increase shuffles to 1 (so the first function doesnt call this again)              
        const parent = document.getElementById("random-group");   //get our parent group
        while (parent.firstChild) {
            parent.firstChild.remove();  //remove previous groups
        }
        make_groups();                //make new ones =)

    })
}



