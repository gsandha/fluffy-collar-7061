async function getData() {
    try {
        let resolve = await fetch("https://639c346116d1763ab1425acf.mockapi.io/haircare")
        if (resolve.ok === true) {
            console.log(resolve)
            let realData = await resolve.json();
            console.log(realData)
            realData.forEach(elem => {
                let bi = document.querySelector('.io');
                // console.log(elem.image)
                bi.innerHTML += `
    <div class="main">          
    <img src="${elem.image}" data-id=${elem.id}>
    <h3 data-id=${elem.id}>${elem.brand}</h3>
    <p data-id=${elem.id}>$ ${elem.price}<p>
    <button data-id=${elem.id}>Remove</button>
    </div>
     `
            })
        }

        let getBtnOfMain = document.querySelectorAll('.main button')
        let getMain = document.querySelector('.main');
        getBtnOfMain.forEach(btn => {
            // console.log(btn)
            btn.addEventListener('click', async (event) => {
                let id = event.target.dataset.id;
                await deleteDataCard(id);
                window.location.reload();
            })
        })

    } catch (error) {
        console.log(error)
    }
}
getData()


let getSearchInputBox = document.querySelector('.searchbox input');
let getSearchIcon = document.querySelector('span ion-icon');

getSearchIcon.addEventListener('click', function () {
    getSearchInputBox.style.width = '70%';
    getSearchIcon.style.left = '70%';
    getSearchInputBox.focus();
})

getSearchInputBox.addEventListener('input', function (e) {
    if (e.target.value.length > 0) {
        getSearchIcon.style.color = '#3a3a3a';
    }
    else {
        getSearchIcon.style.color = '#838383';
    }
    e.target.value = e.target.value.toUpperCase();
});

getSearchInputBox.addEventListener('blur', function () {
    if (getSearchInputBox.value == '') {
        getSearchInputBox.style.width = '0%';
        getSearchIcon.style.left = '9%';
        getSearchInputBox.value = getSearchInputBox.value.toUpperCase();
    }
})

const dot = document.querySelector('.dot');
const text = document.querySelector('.text');

const dot2 = document.querySelector('.dot-2');
const text2 = document.querySelector('.text-2')

const dot3 = document.querySelector('.dot-3');
const text3 = document.querySelector('.text-3');

const dot4 = document.querySelector('.dot-4');
const text4 = document.querySelector('.text-4');

dot.addEventListener('mouseenter', () => {
    text.style.visibility = 'visible';
});

dot.addEventListener('mouseleave', () => {
    text.style.visibility = 'hidden';
});

dot2.addEventListener('mouseenter', () => {
    text2.style.visibility = 'visible';
});

dot2.addEventListener('mouseleave', () => {
    text2.style.visibility = 'hidden';
});

dot3.addEventListener('mouseenter', () => {
    text3.style.visibility = 'visible';
});

dot3.addEventListener('mouseleave', () => {
    text3.style.visibility = 'hidden';
});

dot4.addEventListener('mouseenter', () => {
    text4.style.visibility = 'visible';
});

dot4.addEventListener('mouseleave', () => {
    text4.style.visibility = 'hidden';
});

getSearchInputBox.addEventListener('keyup', function () {
    let searchInputValue = getSearchInputBox.value.toUpperCase();

    let getAllDiv = document.querySelectorAll('.main');

    for (let i = 0; i < getAllDiv.length; i++) {
        let getH3Tag = getAllDiv[i].getElementsByTagName('h3')[0];

        if (getH3Tag.innerHTML.toUpperCase().indexOf(searchInputValue) > -1) {
            getAllDiv[i].style.display = '';
        } else {
            getAllDiv[i].style.display = 'none';
        }
    }

});


let
    lowToHigh = document.querySelector(".dott"),
    highToLow = document.querySelector(".dott-2"),
    a2z = document.querySelector(".dott-3"),
    z2a = document.querySelector(".dott-4")

lowToHigh.addEventListener("click", lowToHighFn)
highToLow.addEventListener("click", highToLowFn)
a2z.addEventListener("click", a2zFn)
z2a.addEventListener("click", z2aFn)

async function lowToHighFn() {
    try {
        let resolve = await fetch("https://639c346116d1763ab1425acf.mockapi.io/haircare")
        if (resolve.ok === true) {
            let realData = await resolve.json();
            let newData = realData.sort((a, b) => a.price - b.price);
            console.log(newData)
            let bi = document.querySelector('.io');
            bi.innerHTML = ''
            newData.forEach(elem => {
                console.log(elem.image)
                bi.innerHTML += `
    <div class="main">          
    <img src="${elem.image}">
    <h3>${elem.brand}</h3>
    <p>$ ${elem.price}<p>
    <button>Remove</button>
    </div>
     `
            })
        }

    } catch (error) {
        console.log(error)
    }
}

async function highToLowFn() {
    try {
        let resolve = await fetch("https://639c346116d1763ab1425acf.mockapi.io/haircare")
        if (resolve.ok === true) {
            let realData = await resolve.json();
            let newData = realData.sort((a, b) => b.price - a.price);
            console.log(newData)
            let bi = document.querySelector('.io');
            bi.innerHTML = ''
            newData.forEach(elem => {
                console.log(elem.image)
                bi.innerHTML += `
    <div class="main">          
    <img src="${elem.image}">
    <h3>${elem.brand}</h3>
    <p>$ ${elem.price}<p>
    <button>Remove</button>
    </div>
     `
            })
        }

    } catch (error) {
        console.log(error)
    }
}

async function a2zFn() {
    try {
        let resolve = await fetch("https://639c346116d1763ab1425acf.mockapi.io/haircare")
        if (resolve.ok === true) {
            let realData = await resolve.json();
            let newData = realData.sort((a, b) => (a.brand > b.brand) ? 1 : ((b.brand > a.brand) ? -1 : 0));
            console.log(newData)
            let bi = document.querySelector('.io');
            bi.innerHTML = ''
            newData.forEach(elem => {
                console.log(elem.image)
                bi.innerHTML += `
    <div class="main">          
    <img src="${elem.image}">
    <h3>${elem.brand}</h3>
    <p>$ ${elem.price}<p>
    <button>Remove</button>
    </div>
     `
            })
        }

    } catch (error) {
        console.log(error)
    }
}

async function z2aFn() {
    try {
        let resolve = await fetch("https://639c346116d1763ab1425acf.mockapi.io/haircare")
        if (resolve.ok === true) {
            let realData = await resolve.json();
            let newData = realData.sort((a, b) => (a.brand < b.brand) ? 1 : ((b.brand < a.brand) ? -1 : 0));
            console.log(newData)
            let bi = document.querySelector('.io');
            bi.innerHTML = ''
            newData.forEach(elem => {
                console.log(elem.image)
                bi.innerHTML += `
    <div class="main">          
    <img src="${elem.image}">
    <h3>${elem.brand}</h3>
    <p>$ ${elem.price}<p>
    <button>Remove</button>
    </div>
     `
            })
        }

    } catch (error) {
        console.log(error)
    }
}

let getInputForm = document.querySelector('.lo form');



getInputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let getInputbox = document.querySelectorAll('.lo input');
    let fArray = {};
    for (let i = 0; i < getInputbox.length; i++) {
        fArray[getInputbox[i].id] = getInputbox[i].value;
    }
    // console.log(fArray)
    addData(fArray);
})

async function addData(fArray) {
    try {
        let addFetchMe = await fetch('https://639c346116d1763ab1425acf.mockapi.io/haircare', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fArray)
        })
        if (addFetchMe.ok === true) {
            alert('A New Product Added')
        }
    } catch (error) {
        console.log(error)
    }
}

async function deleteDataCard(id) {
    try {
        let deleteMe = await fetch(`https://639c346116d1763ab1425acf.mockapi.io/haircare/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (deleteMe.ok === true) {
            alert('deleted')
        }
    } catch (error) {
        console.log(error);
    }
}

let checkBox = document.querySelector('.checkbox-wrapper-25 input[type="checkbox"]');
let getDiv = document.querySelector('.lo');
let getDivJp = document.querySelector('.jp');
let getId = document.querySelector('#id');
checkBox.addEventListener('click', function () {
    if (checkBox.checked) {
        getDiv.style.display = 'none';
        getDivJp.style.display = 'block';
    } else {
        getDiv.style.display = 'block';
        getDivJp.style.display = 'none';
    }
});

let getPatch = document.querySelector('.jp form');

getPatch.addEventListener('submit', (e) => {
    e.preventDefault();
    let getInputbox = document.querySelectorAll('.jp input');
    let id = document.querySelector('.ok').value;
    let pArray = {};
    for (let i = 0; i < getInputbox.length; i++) {
        pArray[getInputbox[i].id] = getInputbox[i].value;
    }
    // console.log(fArray)
    patchData(pArray,id);
});

async function patchData(pArray,id) {
    try {
        let patchFetchMe = await fetch(`https://639c346116d1763ab1425acf.mockapi.io/haircare/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pArray)
        })
        if (patchFetchMe.ok === true) {
            alert('The product has been updated')
        }
    } catch (error) {
        console.log(error)
    }
}

let getDot = document.querySelector('.dot'),
    getDot2 = document.querySelector('.dot-2'),
    getDot3 = document.querySelector('.dot-3'),
    getDot4 = document.querySelector('.dot-4');

    getDot.addEventListener('click', ()=> {
        window.location.assign('AdminProduct.html');
    })

    getDot2.addEventListener('click', ()=> {
        window.location.assign('AdminProduct2.html');
    })

    getDot3.addEventListener('click', ()=> {
        window.location.assign('AdminProduct3.html');
    })

    getDot4.addEventListener('click', ()=> {
        window.location.assign('AdminProduct4.html');
    })