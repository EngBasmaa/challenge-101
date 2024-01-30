// function to create elements:
let create = (element) => document.createElement(`${element}`)


// create HTML elements:
let header = create("header")
let logo = create("h1")
let menue = create("ul") // for unordered list
let content = create("div")
let footer = create("footer")

// create classes:
header.className = "head"
logo.className = "logo"
menue.className = "menue"
footer.className = "footer"

// add to DOM:
header.append(logo)
header.append(menue)
document.body.append(header)
document.body.append(content)
document.body.append(footer)


// loop for 'menue (ul)' and 'content (div)':
for(let i = 1; i <= 15; i++){

    // for menue (ul) of 4 (li)s
    if (i <= 4) {
        let menueList = create("li")
        menueList.className = `menue-list-${i}`
        menue.append(menueList)

        menueList.style.cssText ="cursor: pointer" // to make (li)s as 'links'
    }

    // from 1 to 15:
    let product_box = create("div")
    let product_num = create("span")

    // to add 'classes' to the 'each product'
    product_box.className = "product" // for all 15 products

    product_box.textContent = "product"
    product_num.textContent = `${i}`

    // product_num product_box 
    product_box.prepend(product_num) // 'num' is inside the 'box' .. at 'first' of its 'text'
    content.append(product_box) // 'box' is inside the 'content' (div)

    // product style:
    product_box.style.cssText = "color: red; padding: 20px; background: yellow; border: 2px solid red; width: calc((100% - 40px) / 3) ; border-radius:.5 rem; box-sizing:border-box; text-align:center"
    product_num.style.cssText = "display:block; color:black; font-size:30px; margin-bottom:20px"
    // display:block عشان ييجى ف سطر لوحده
}

// add text for 'logo':
logo.textContent = "elzero"

document.querySelector(".menue-list-1").textContent = "Home"
document.querySelector(".menue-list-2").textContent = "Service"
document.querySelector(".menue-list-3").textContent = "About"
document.querySelector(".menue-list-4").textContent = "Contact"

footer.textContent = "Copyright @ 2024 By: [Basma Elmasry]"


// website style :
document.body.style.cssText = "margin:0; font-family: Tahoma, Arial; background-color: rgb(238, 182, 28)"
header.style.cssText = "display:flex; align-items:center; justify-content: space-between; padding: 20px; background-color: rgb(244, 249, 91)"
logo.style.cssText = "color: rgb(230, 170, 5); font-size:50px; "
menue.style.cssText = "list-style: none; display:flex; justify-content: space-between; padding: 20px; gap:15px"
content.style.cssText = "display:flex; flex-wrap: wrap; gap:20px; padding:20px;"   
footer.style.cssText = "background-color: rgb(244, 249, 91); color: rgb(230, 100, 1); font-size: 20px; font-weight: bold; padding: 20px; text-align:center"













