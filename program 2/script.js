function saveData(){
    const name=document.getElementById("name").value.trim();
    const age=document.getElementById("age").value.trim();

if(name ===""|| age===""){
    alert("please fill in all fields!");
    return;
}

const user={name,age};
const jsonData=JSON.stringify(user);
localStorage.setItem("userProfile",jsonData);

alert("Data saved successfully!");
displayData(user);

}

function loadData(){
    const data=localStorage.getItem("userProfile");

    if(!data){
        document.getElementById("output").innerHTML= "<p> No data found.</p>";
        return;  
    }

    const user=JSON.parse(data);
    displayData(user);
}

function clearData(){
    localStorage.removeItem("userProfile");
    document.getElementById("output").innerHTML="<p>Data cleared.</p>";
    document.getElementById("name").value="";
     document.getElementById("age").value="";
}

function displayData(user){
    document.getElementById("output").innerHTML =` 
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Age:</strong> ${user.age}</p>    
`;
}