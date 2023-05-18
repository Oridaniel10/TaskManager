function addtask() {
    const inputBox = document.getElementById("inputbox");
    const listContainer = document.getElementById("list-container");
   
    if (inputBox.value === '' || inputBox.value.length > 30) {
        alert("you must write something between 1-30 characters..");
    } else {
        // ניצור את הli החדש
        const li = document.createElement("li");
        li.textContent = inputBox.value;
//הוספת תאריך חדש ליד כל מטלה
        const dateSpan = document.createElement("span");
        const currentDate = new Date();
        dateSpan.textContent = "was created on = " + currentDate.toLocaleDateString();
        dateSpan.style.marginLeft = "20px";
        dateSpan.style.fontSize = "x-small";
        dateSpan.style.fontWeight = "bold"; 
        li.appendChild(dateSpan);
        

        // ניצור div  חדש
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        // ליצור כפתור מחיקה זהה
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("bt");
        deleteButton.textContent = "Delete";
        buttonContainer.appendChild(deleteButton);

        // ליצור כפתור למטה
        const downButton = document.createElement("button");
        downButton.classList.add("bt");
        downButton.textContent = "Down";
        buttonContainer.appendChild(downButton);
  
        // לפתור כפתור "אפ"
        const upButton = document.createElement("button");
        upButton.classList.add("bt");
        upButton.textContent = "Up";
        buttonContainer.appendChild(upButton);

        // העתקת התכונות של כפתור מחיקה
    deleteButton.addEventListener("click", function () { deleteTask(this);});
  
      // העתקת תכונות של כפתור ירידה
      downButton.addEventListener("click", function () {
        moveTaskDown(this);
      });
      // העתקת תכונות של כפתור עליה
      upButton.addEventListener("click", function () {
        moveTaskUp(this);
      });

        // הוספת הדיב לשורה הנוכחית
        li.appendChild(buttonContainer);

        // הוספת השורה הנוכחית לתוך הקונטיינר הגדול
        listContainer.appendChild(li);

        // ניקוי האינפוט
         inputBox.value = '';

    }
}
// הפרמטר שמקבלים זה הפוינטר לכפתור - אז אנחנו רוצים למחוק את הסבא שלו שזה כל האל איי
function deleteTask(theli) {
    // Get the parent li element
    var li = theli.parentNode.parentNode;
    // Remove the li element from the ol list
    li.parentNode.removeChild(li);
}


function moveTaskUp(button) {
    var li = button.parentNode.parentNode;
    var prevLi = li.previousElementSibling;
    if (prevLi && prevLi.tagName === 'LI') {
      li.parentNode.insertBefore(li, prevLi);
    }

  }
  
  function moveTaskDown(button) {
    var li = button.parentNode.parentNode;
    var nextLi = li.nextElementSibling;
    if (nextLi && nextLi.nodeName === 'LI') {
      li.parentNode.insertBefore(nextLi, li);
    }
  }
  
  const newtask = document.querySelector('#inputbox');
     newtask.addEventListener('keyup',(e) =>{
      if(e.keyCode ==13){
        addtask()
      }
     });

     //פונקציה למחיקת כל המשימות
     function clearAllTasks() {
      const confirmed = confirm("Are you sure you want to clear all tasks?");
      if (confirmed) {
          const listContainer = document.getElementById("list-container");
          listContainer.innerHTML = "";
      }
  }
  
  
  