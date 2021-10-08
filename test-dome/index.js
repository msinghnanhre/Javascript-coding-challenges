function moveUp(item) {
    let previousItem = item.previousElementSibling
    item.previousElementSibling === null ?
        alert("already at the top") :
        item.parentNode.insertBefore(item, previousItem)
}

function moveDown(item) {
    let list = document.querySelector("ol")
    let nextItem = item.nextElementSibling.nextElementSibling
    !nextItem ? list.append(item) : item.parentNode.insertBefore(item, nextItem)

}

function setup() {
    const items = document.querySelectorAll("li")
    items.forEach((item, index )=> {
        item.childNodes.forEach(node => {
            node.nodeName === "BUTTON" ?
                node.innerText === "Up!" ?
                node.addEventListener("click", () => moveUp(item)) :
                node.addEventListener("click", () => moveDown(item)) : console.log("Not Button")
        })
    })  
}

// Example case
document.body.innerHTML = `<ol>
  <li><button>Up!</button>Taco<button>Down!</button></li>
  <li><button>Up!</button>Pizza<button>Down!</button></li>
  <li><button>Up!</button>Eggs<button>Down!</button></li>
</ol>`;

setup();
document.getElementsByTagName('button')[2].click();