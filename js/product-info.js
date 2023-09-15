
document.addEventListener("DOMContentLoaded", function (){
    showProduct();
});
function showProduct() {
    fetch(`https://japceibal.github.io/emercado-api/products/${localStorage.getItem("productsID")}.json`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("container").innerHTML = `
            <p class="fs-2 mt-4 mb-4">${data.name}</p>
            <hr>
            <div class="row">
                <p class="mb-0"><strong>Precio</strong></p>
                <p>${data.currency} ${data.cost}</p>
            </div>
            <div class="row">
                <p class="mb-0"><strong>Descripción</strong></p>
                <p>${data.description}</p>
            </div>
            <div class="row">
                <p class="mb-0"><strong>Categoría</strong></p>
                <p>${data.category}</p>
            </div>
            <div class="row">
                <p class="mb-0"><strong>Cantidad de vendidos</strong></p>
                <p>${data.soldCount}</p>
            </div>
            <div class="row">
                <p class="mb-2"><strong>Imágenes Ilustrativas</strong></p>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <img src="${data.images[0]}" class="img-thumbnail" alt="...">   
                        </div>
                        <div class="col">
                            <img src="${data.images[1]}" class="img-thumbnail" alt="...">
                        </div>
                        <div class="col">
                            <img src="${data.images[2]}" class="img-thumbnail" alt="...">
                        </div>
                        <div class="col">
                            <img src="${data.images[3]}" class="img-thumbnail" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .catch(error => {
        console.error("Error al cargar los productos:", error);
    });
};
