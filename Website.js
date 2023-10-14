
    const itemsPerPage = 14; // Number of items per page
    const ulList = document.querySelector("#box-4 ul");
    const listItems = ulList.getElementsByTagName("li");
    const totalPages = Math.ceil(listItems.length / itemsPerPage);
    let currentPage = 1;

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
        for (let i = 1; i <= totalPages; i++) {
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
            listItems[i].style.display = (i >= start && i < end) ? "list-item" : "none";
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
