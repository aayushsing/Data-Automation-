document.getElementById("upload-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const result = await response.json();
        const previewSection = document.getElementById("preview-section");
        const previewTable = document.getElementById("preview-table");
        const messageDiv = document.getElementById("message");

        previewSection.style.display = "block";
        previewTable.innerHTML = ""; // Clear previous data
        result.data.forEach((row) => {
            const tr = document.createElement("tr");
            row.forEach((cell) => {
                const td = document.createElement("td");
                td.textContent = cell;
                tr.appendChild(td);
            });
            previewTable.appendChild(tr);
        });
        messageDiv.textContent = "";
    } catch (error) {
        const messageDiv = document.getElementById("message");
        messageDiv.textContent = error.message;
        messageDiv.style.color = "red";
    }
});

document.getElementById("save-btn").addEventListener("click", async function () {
    try {
        const tableRows = [...document.getElementById("preview-table").rows];
        const data = tableRows.map((row) => [...row.cells].map((cell) => cell.textContent));

        const response = await fetch("/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const result = await response.json();
        const messageDiv = document.getElementById("message");
        messageDiv.textContent = result.message;
        messageDiv.style.color = "green";
    } catch (error) {
        const messageDiv = document.getElementById("message");
        messageDiv.textContent = error.message;
        messageDiv.style.color = "red";
    }
});

document.getElementById("export-pdf-btn").addEventListener("click", async function () {
    try {
        const tableRows = [...document.getElementById("preview-table").rows];
        const data = tableRows.map((row) => [...row.cells].map((cell) => cell.textContent));

        const response = await fetch("/export_pdf", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const result = await response.json();
        const messageDiv = document.getElementById("message");
        messageDiv.textContent = result.message + `. Download: ${result.file}`;
        messageDiv.style.color = "green";
    } catch (error) {
        const messageDiv = document.getElementById("message");
        messageDiv.textContent = error.message;
        messageDiv.style.color = "red";
    }
});