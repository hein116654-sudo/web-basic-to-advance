// အသုံးပြုမည့် HTML Element များကို ချိတ်ဆက်ခြင်း
const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const userList = document.getElementById("userList");
const loadingElement = document.getElementById("loading");
const errorElement = document.getElementById("errorMessage");

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Helper Function: UI ပေါ်တွင် Error ပြသခြင်း
function showError(message) {
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearError() {
  errorElement.textContent = "";
  errorElement.style.display = "none";
}

// -------------------------------------------------------------
// ၁။ GET Request: Users စာရင်းကို ဆွဲထုတ်ပြီး HTML ထဲ ထည့်ပြခြင်း (READ)
// -------------------------------------------------------------
async function fetchUsers() {
  loadingElement.style.display = "block"; // Loading စပြမယ်
  clearError();

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Data ဆွဲယူရာတွင် အမှားဖြစ်ပေါ်ပါသည်: ${response.status}`);
    }

    const users = await response.json();
    userList.innerHTML = ""; // မူလ list ကို ရှင်းထုတ်ခြင်း

    // User အယောက် ၅ ယောက်စာလောက်ကို loop ပတ်ပြမယ်
    users.slice(0, 5).forEach((user) => {
      appendUserToUI(user);
    });

  } catch (error) {
    showError(error.message);
  } finally {
    loadingElement.style.display = "none"; // Loading ပိတ်မယ်
  }
}

// UI ထဲသို့ User Element အသစ်တစ်ခု ထည့်သွင်းပေးသော Function
function appendUserToUI(user) {
  const li = document.createElement("li");
  li.setAttribute("data-id", user.id);

  li.innerHTML = `
    <div>
      <strong>${user.name}</strong><br>
      <small style="color: gray;">${user.email}</small>
    </div>
    <button class="delete-btn" onclick="deleteUser(${user.id})">Delete</button>
  `;

  userList.appendChild(li);
}

// -------------------------------------------------------------
// ၂။ POST Request: Form မှ User အသစ်ကို Server ဆီ ပို့ခြင်း (CREATE)
// -------------------------------------------------------------
userForm.addEventListener("submit", async (e) => {
  e.preventDefault(); // Form ပုံမှန် Reload ဖြစ်သွားခြင်းကို တားဆီးခြင်း

  const newUser = {
    name: nameInput.value,
    email: emailInput.value
  };

  loadingElement.style.display = "block";
  clearError();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    if (!response.ok) {
      throw new Error("User အသစ် ဖန်တီး၍ မရပါ!");
    }

    const createdUser = await response.json();

    // UI ပေါ်တွင် ချက်ချင်း အသစ်ထည့်ပြခြင်း
    appendUserToUI(createdUser);

    // Form ကို စာသားများ ပြန်ရှင်းထုတ်ခြင်း
    nameInput.value = "";
    emailInput.value = "";

  } catch (error) {
    showError(error.message);
  } finally {
    loadingElement.style.display = "none";
  }
});

// -------------------------------------------------------------
// ၃။ DELETE Request: User တစ်ဦးကို ဖျက်ပစ်ခြင်း (DELETE)
// -------------------------------------------------------------
async function deleteUser(id) {
  const confirmDelete = confirm("ဒီ User ကို တကယ် ဖျက်မှာ သေချာပါသလား?");
  if (!confirmDelete) return;

  loadingElement.style.display = "block";
  clearError();

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error("User အား ဖျက်၍ မရပါ!");
    }

    // Server ပေါ်က အောင်မြင်ရင် UI ပေါ်ကပါ ဖျက်ထုတ်ခြင်း
    const userElement = document.querySelector(`li[data-id="${id}"]`);
    if (userElement) {
      userElement.remove();
    }

  } catch (error) {
    showError(error.message);
  } finally {
    loadingElement.style.display = "none";
  }
}

// Website စတင်ဖွင့်ချိန်တွင် မူလ Users Data ကို ခေါ်ယူရန်
fetchUsers();