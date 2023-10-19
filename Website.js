const itemsPerPage = 15; // Number of items per page
const ulList = document.querySelector("#box-4 ul");
const listItems = ulList.getElementsByTagName("li");
const totalPages = Math.ceil(listItems.length / itemsPerPage);
let currentPage = 1;
const maxButtonsToShow = 5;
let startIndex = 1;

// Initialize pagination
createPaginationButtons();

function createPaginationButtons() {
  const pagination = document.querySelector("#pagination");
  const prevButton = document.querySelector("#prev");
  const nextButton = document.querySelector("#next");

  // Remove existing buttons
  while (pagination.firstChild) {
    pagination.removeChild(pagination.firstChild);
  }

  // Add the "Prev" button
  pagination.appendChild(prevButton);

  // Add numbered buttons for each page
  for (let i = startIndex; i <= totalPages && i < startIndex + maxButtonsToShow; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.onclick = function () {
      goToPage(i);
    };
    if (i === currentPage) {
      button.classList.add("active");
    }
    pagination.appendChild(button);
  }

  // Add the "Next" button
  pagination.appendChild(nextButton);
}

function goToPage(page) {
  currentPage = page;
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.display = i >= start && i < end ? "list-item" : "none";
  }

  if (currentPage > startIndex + maxButtonsToShow - 1) {
    startIndex = currentPage - maxButtonsToShow + 1;
  } else if (currentPage < startIndex) {
    startIndex = currentPage;
  }

  createPaginationButtons();
}

function prevPage() {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
}

// Initially show the first page
goToPage(1);












// Search Function Code Start from here

     // Get the necessary elements
     const searchInput = document.getElementById('searchInput');
     const searchButton = document.getElementById('searchButton');
     const itemList = document.getElementById('itemList');
     
     // Add items to Box-4
     // for (let i = 1; i <= 100; i++) {
     //     const item = `Item ${i}`;
     //     const li = document.createElement('li');
     //     li.textContent = item;
     //     itemList.appendChild(li);
     // }
     
     // Search function
     function searchItems() {
         const searchTerm = searchInput.value.toLowerCase();
         const items = itemList.getElementsByTagName('li');
     
         for (const item of items) {
             const text = item.textContent.toLowerCase();
             if (text.includes(searchTerm)) {
                 item.style.display = 'block';
             } else {
                 item.style.display = 'none';
             }
         }
     }
     
     // Event listeners
     searchButton.addEventListener('click', searchItems);
     
     searchInput.addEventListener('keyup', (event) => {
         if (event.key === 'Enter') {
             searchItems();
         }
     });
     
     searchInput.addEventListener('input', searchItems);
