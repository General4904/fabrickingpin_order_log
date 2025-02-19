// Script

console.log("Hello, General");

let serialNumber = 1;
function formatDate(date) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
const today = formatDate(new Date());
document.getElementById("date").innerText = `Date: ${today}`;

function addOrder() {
  const customer = document.getElementById("customer").value;
  const fabric = document.getElementById("fabric").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  if (customer && fabric && quantity && price) {
    const table = document.getElementById("orderTableBody");
    const row = table.insertRow();
    row.innerHTML = `
            <td>${serialNumber++}</td>
            <td>${today}</td>
            <td>${customer}</td>
            <td>${fabric}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td><span class="delete-btn" onclick="deleteOrder(this)">Delete</span></td>
        `;
    document.getElementById("customer").value = "";
    document.getElementById("fabric").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
  }
}

function deleteOrder(element) {
  element.parentElement.parentElement.remove();
}

function resetSerialNumber() {
  const savedDate = localStorage.getItem("savedDate");
  if (savedDate !== today) {
    serialNumber = 1;
    localStorage.setItem("savedDate", today);
  }
}

resetSerialNumber();
