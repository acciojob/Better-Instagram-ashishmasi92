//your code here

let imgArr = ["div1", "div2", "div3", "div4", "div5", "div6"]


let div = document.getElementsByClassName("image")

console.log(div);

function shuffleImg(arr) {

    for (let i = 0; i <= arr.length - 1; i++) {
        let rindex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[rindex]] = [arr[rindex], arr[i]]

    }


    return arr

}


window.onload = () => {

    let shuffle = shuffleImg(div)

for(let i=0;i<=shuffle.length-1;i++){

    shuffle[i].id = imgArr[i]
}

    
    // dragstart and dragend end

    for(let t of shuffle){

        t.addEventListener("dragstart", (e) => {
    
    
            console.log("start");
            e.target.style.opacity = "0.5"
            e.dataTransfer.setData("text", e.target.id)
        })
        t.addEventListener("dragend", dragendEvent)
    }
    
    function dragendEvent(e) {
        console.log("end");
        e.target.style.opacity = "1"
    }


    // 3 main event dragover dragenter drop

    let eventArr = ["dragover", "dragenter", "drop"]



    eventArr.forEach((events) => {

        for (let t of div) {
            t.addEventListener(events, (e) => {
                e.preventDefault()

                if (e.type == "drop") {
                    let get = e.dataTransfer.getData("text")
                    let div1 = document.getElementById(get)

                    let text1 = div1.innerHTML
                    let text2 = t.innerHTML
                    let div2 = t.id

                    t.id = div1.id
                    t.innerHTML = text1
                    div1.id = div2
                    div1.innerHTML = text2



                }
            })
        }
    })



}


