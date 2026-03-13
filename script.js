document.addEventListener('DOMContentLoaded', function() {
    const itemForm = document.getElementById('itemForm');
    const itemsBody = document.getElementById('itemsBody');
    const grandTotalElement = document.getElementById('grandTotal');
    const dateElement = document.getElementById('dateTime');

    // Set current date and time
    const now = new Date();
    dateElement.textContent = now.toLocaleDateString('id-ID') + ' ' + now.toLocaleTimeString('id-ID');

    let items = [];
    let grandTotal = 0;

    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const qty = parseInt(document.getElementById('qty').value);
        const price = parseFloat(document.getElementById('price').value);

        if (name && qty > 0 && price >= 0) {
            const total = qty * price;
            items.push({ name, qty, price, total });

            // Add row to table
            const row = itemsBody.insertRow();
            row.insertCell(0).textContent = name;
            row.insertCell(1).textContent = qty;
            row.insertCell(2).textContent = `Rp ${price.toFixed(2)}`;
            row.insertCell(3).textContent = `Rp ${total.toFixed(2)}`;

            // Update grand total
            grandTotal += total;
            grandTotalElement.textContent = `Grand Total: Rp ${grandTotal.toFixed(2)}`;

            // Reset form
            itemForm.reset();
        } else {
            alert('Masukkan data yang valid.');
        }
    });
});
