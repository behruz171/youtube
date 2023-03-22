
let row = document.querySelector(".row1")
let inp_src = document.querySelector(".inp1")
let inp_text = document.querySelector(".inp2")
let son_boshi = 0
let son_oxiri = 3

function chiz(){
    row.innerHTML = ""
    videos.map((item,index) => {
        let col = document.createElement("div")
        col.classList.add("col-4", "text-center")
    
        let card = document.createElement("div")
        card.classList.add("card","my-2")
    
        let iframe = document.createElement("iframe")
        iframe.src = item.url

        let heart = document.createElement("i")
        heart.classList.add("bi","bi-heart-fill")
        heart.setAttribute("onclick",`ozgar(${index})`)
        item.status == false ? heart.classList.add("text-dark") : heart.classList.add("text-danger")

        let title = document.createElement("h2")
        title.textContent = item.tittle

        let btn = document.createElement("button")
        btn.classList.add("btn","btn-danger")
        btn.textContent = "o'chirish"
        btn.setAttribute("onclick",`ochir(${index})`)
    


        card.appendChild(iframe)
        card.appendChild(title)
        card.append(heart)
        card.appendChild(btn)
        col.appendChild(card)
        row.appendChild(col)

    })
}
chiz()

function ozgar(son){
    videos[son].status = !videos[son].status
    chiz()
}


function bos(){
    
    row.innerHTML = ""
    let video = {
        url:inp_src.value,
        tittle:inp_text.value
    }

    
    videos.push(video)
    chiz()
    inp_src.value = ""
    inp_text.value =""
}


function qidir(nimadir){
    let natija = videos.filter(item =>{
        return item.tittle.toLowerCase().includes(nimadir.toLowerCase())
    })

    row.innerHTML =""

    natija.forEach(item => {
        let col = document.createElement("div")
        col.classList.add("col-4", "text-center")
    
        let card = document.createElement("div")
        card.classList.add("card","my-2")
    
        let iframe = document.createElement("iframe")
        iframe.src = item.url

        let title = document.createElement("h2")
        title.textContent = item.tittle

        let btn = document.createElement("button")
        btn.classList.add("btn","btn-danger")
        btn.textContent = "o'chirish"
        
        card.appendChild(iframe)
        card.appendChild(title)
        card.appendChild(btn)
        col.appendChild(card)
        row.appendChild(col)
    })
}

function ochir(son){
    row.innerHTML = ""
    videos.splice(son,1)
    chiz()
}

function add3(){
    row.innerHTML =""
    videos.map((item,index) =>{
        if(index>=son_boshi && index<son_oxiri){
            videos.push(item)
        }
    })

    son_boshi = son_oxiri
    son_oxiri+=3
    chiz()
}






