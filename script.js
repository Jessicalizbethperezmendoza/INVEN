document.getElementById('product-photo').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('product-preview');
        output.src = reader.result;
        output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
});

function addProduct() {
    const productCode = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productQuantity = document.getElementById('product-quantity').value;
    const productPhoto = document.getElementById('product-preview').src;

    if (productCode && productName && productQuantity && productPhoto) {
        const productTableBody = document.querySelector('#product-table tbody');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${productPhoto}" alt="Foto del Producto"></td>
            <td>${productCode}</td>
            <td>${productName}</td>
            <td>${productQuantity}</td>
            <td><button onclick="removeProduct(this)">Eliminar</button></td>
        `;

        productTableBody.appendChild(row);

        // Limpiar los campos del formulario
        document.getElementById('product-code').value = '';
        document.getElementById('product-name').value = '';
        document.getElementById('product-quantity').value = '';
        document.getElementById('product-photo').value = '';
        document.getElementById('product-preview').style.display = 'none';
    } else {
        alert('Por favor, completa todos los campos y sube una imagen.');
    }
}

function removeProduct(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
