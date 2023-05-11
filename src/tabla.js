const tablaTrenes = document.querySelector("#tabla-trenes");
const tablaBody = document.querySelector("#data");

fetch("trenes.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let html = "";
        data.forEach((tren) => {
            html += `
        <tr>
          <td>${tren.id}</td>
          <td>${tren.marca}</td>
          <td>${tren.pais}</td>
          <td>${tren.servicio}</td>
        </tr>
      `;
        });
        tablaBody.innerHTML = html;
        tablaTrenes.appendChild(tablaBody);
    })
    .catch((error) => {
        console.log(error);
});

const tren1 = document.querySelector("#img1");
const tren2 = document.querySelector("#img2");
const tren3 = document.querySelector("#img3");

tren1.addEventListener("click", () => {
    $('#tabla-trenes').show();
    fetch("trenes.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = "";
            const tren = data[0];
            html += `
            <tr>
              <td>${tren.id}</td>
              <td>${tren.Marca}</td>
              <td>${tren.Pais}</td>
              <td>${tren.Servicio}</td>
            </tr>
          `;
            tablaBody.innerHTML = html;
        })
        .catch((error) => {
            console.log(error);
        });
});

tren2.addEventListener("click", () => {
    $('#tabla-trenes').show();
    fetch("trenes.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = "";
            const tren = data[1];
            html += `
            <tr>
              <td>${tren.id}</td>
              <td>${tren.Marca}</td>
              <td>${tren.Pais}</td>
              <td>${tren.Servicio}</td>
            </tr>
          `;
            tablaBody.innerHTML = html;
        })
        .catch((error) => {
            console.log(error);
        });
});

tren3.addEventListener("click", () => {
    $('#tabla-trenes').show();
    fetch("trenes.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let html = "";
            const tren = data[2];
            html += `
              <tr>
                <td>${tren.id}</td>
                <td>${tren.Marca}</td>
                <td>${tren.Pais}</td>
                <td>${tren.Servicio}</td>
              </tr>
            `;
            tablaBody.innerHTML = html;
        })
        .catch((error) => {
            console.log(error);
        });
});
