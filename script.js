//your code here


let arr = ["div1", "div2", "div3", "div4", "div5", "div6"]

let dives = document.querySelectorAll(".image")


console.log(dives);

let count = 0

dives.forEach((element) => {
    element.id = arr[count++]
    element.addEventListener("dragstart", startEvent)
    element.addEventListener("dragend", endEvent)

})

// dragstart and dragend

function startEvent(e) {
    console.log("dragStart");
    e.target.style.opacity = "0.5"

    e.dataTransfer.setData("text/plain", e.target.id)

}


function endEvent(e) {
    console.log("dragend");
    e.target.style.opacity = "1"
}


// dragover dragenter,drop


let newEventArr = ["dragover", "dragenter", "drop"]


newEventArr.forEach((element) => {

    for (let t of dives) {
        t.addEventListener(element, (e) => {
            e.preventDefault()
            if (element == "drop") {
                let dropElement = e.target
                let text = dropElement.innerText
                let dropElementId = e.target.id
                let selectedId = e.dataTransfer.getData("text")
                let selectedImg = document.getElementById(selectedId)
                let txt2 = selectedImg.innerText

                dropElement.id = selectedId
                dropElement.innerText= txt2
                selectedImg.id = dropElementId
selectedImg.innerText= text
            }
        })
    }
})
