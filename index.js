let addbtn = document.getElementById("addbutton");
let inputtask = document.getElementById("inputtask");
let tasklist = document.getElementById("tasklist");

function addTask() {
  let task = inputtask.value;
  if (task === "") {
    alert("Field should not be Empty!!");
  } else {
    let taskIndex = tasklist.children.length + 1;
    tasklist.className="flex flex-col border-2 border-yellow-900 rounded-2xl min-h-[40rem] w-[50rem] gap-5  pt-2 pl-5 pr-9 pb-5"
    let li = document.createElement("li");
    li.className = "flex gap-5 pl-10 pr-12 pt-5";
    let index=document.createElement('span')
    index.textContent=`${taskIndex}.`
    index.className="font-bold"
    let t = document.createElement("p");
    t.textContent = task;
    t.className="pl-5  border-2 border-green-200 w-[29rem]"
    let editbtn = document.createElement("button");
    editbtn.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#000000"
      >
        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
      </svg>`;
      editbtn.addEventListener('click',()=>{
        let newtask=prompt("Edit the task",t.textContent);
        if(newtask){
            t.textContent=newtask;
        }
      })

    let dltbtn = document.createElement("button");
    dltbtn.innerHTML = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>`;

    dltbtn.addEventListener('click',()=>{
        li.remove();
    })
    li.appendChild(index);
    li.appendChild(t);
    li.appendChild(editbtn);
    li.appendChild(dltbtn);
    tasklist.appendChild(li);
  }
}

addbtn.addEventListener("click", addTask);
