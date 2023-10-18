import { buttonData } from "./constants.js";

const buttonsArea = document.getElementById("buttons")

export function renderMenuItems(menuItems, menuList) {
  menuList.innerHTML = menuItems.map((item) => `
    <a id="card"  href="/detail.html?id=${item.id
    }" class="d-flex  flex-column flex-md-row text-decoration-none text-dark gap-3">
      <img
        class="rounded shadow img-fluid"
        src="${item.img}"
      />

    <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${item.price}₺</p>
        </div>
        <p class="lead">${item.desc.slice(0, 60) + "..."}</p>
    </div>
</a>`).join("")
}
export function renderButtons(active) {
  buttonsArea.innerHTML = "";

  buttonData.forEach((btn) => {
    const buttonEle = document.createElement("button")
    buttonEle.className = 'btn btn-outline-dark';

    buttonEle.dataset.category = btn.value;

    if (btn.text === active) {
      buttonEle.classList.add("btn-dark", "text-white")
    }
    buttonEle.innerText = btn.text
    buttonsArea.appendChild(buttonEle)
  })
}
