import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

const firebaseConfig = {
  databaseURL: "https://leads-tracker-app-35b7b-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database, "leads/");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];

// --- Save Manual Input ---
inputBtn.addEventListener("click", function () {
  const inputValue = inputEl.value.trim();
  if (inputValue !== "") {
    // Save to LocalStorage
    myLeads.push(inputValue);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    // Save to Firebase
    push(dbRef, inputValue);
    inputEl.value = "";
    render(myLeads);
  }
});

// --- Load from Firebase and Render on Load ---
onValue(dbRef, (snapshot) => {
  // Firebase data is already rendered in localStorage
  render(myLeads);
});

// --- Render Function ---
function render(leads) {
  let listItems = "";
  leads.forEach((lead, index) => {
    listItems += `
      <li>
        <a target='_blank' href='${lead}'>${lead}</a>
        <button class='remove-btn' data-index='${index}'>&times;</button>
      </li>
    `;
  });
  ulEl.innerHTML = listItems;

  // Attach remove events
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const index = this.getAttribute("data-index");

      const removedLead = myLeads[index];

      // Remove from LocalStorage
      myLeads.splice(index, 1);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);

      onValue(dbRef, function(snapshot) {
        const snapshotValues = snapshot.val()
        const snapshotDoesExist = snapshot.exists()
        if (snapshotDoesExist) {
        // Challenge: Create a const called 'leads' which is an array containing the values inside of the snapshotValues object
        const leads = Object.values(snapshotValues)
      }
    })
    
      // Also remove from Firebase (if exists)
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          if (childSnapshot.val() === removedLead) {
            remove(ref(database, "leads/" + childSnapshot.key));
          }
        });
      }, { onlyOnce: true });

    });
  });
}

// --- Delete All ---
deleteBtn.addEventListener("dblclick", function () {
  // Challenge: Import the 'remove' function and call it here to delete the leads
  myLeads = [];
  ulEl.innerHTML = "";
  remove(dbRef); // Clear Firebase too
});




