const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
       if(event.key == "Enter"){
        addToDo(this.value)
        this.value = "";
       }
    }
)

const addToDo = (Item)=>{
    const ListItem = document.createElement("li");
    ListItem.innerHTML = `
        ${Item}
        <i class="fas fa-times"></i>
    `;

    

    toDoBox.appendChild(ListItem);

    
    ListItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )

    ListItem.querySelector("i").addEventListener(
        "click",
        function(){
            ListItem.remove();
        }
    )
    
}


