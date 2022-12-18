//add hover class

let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('hovered');
    });
    this.classList.add("hovered");
}

let viewAllBtn = document.querySelector('.btn');

viewAllBtn.addEventListener('click', () => {
    window.location.assign('AdminProduct.html')
})

list.forEach(item => item.addEventListener('mouseover', activeLink));

//Toggle

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let ii = document.querySelector('.ii')

toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
    ii.classList.toggle('active');
}

// let list2 = document.querySelectorAll('.navigation li a span')
let data2 = document.querySelector('.ii')
// let main_section = document.querySelector('.main')
let data = document.querySelector('.original')

for (let i = 0; i < list.length; i++) {
    list[1].addEventListener('click', () => {
        // main.innerHTML = data.innerHTML;
        window.location.reload();
        data2.setAttribute('display', 'none')
        // main.classList.toggle('active')
        let viewAllBtn = document.querySelector('.btn');

        viewAllBtn.addEventListener('click', () => {
            window.location.assign('AdminProduct.html')
        })
    })
    list[2].addEventListener('click', () => {
        let catchFinderH2 = document.querySelector('.details>div>div>h2');
        catchFinderH2.innerHTML = `Customer-Data`;
        let catch_theadTr = document.querySelector('.details thead>tr');
        catch_theadTr.innerHTML = `
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>PhoneNo</td>
                                    <td>Password</td>
                                    <td>Delete</td>
        `;

        let viewAllBtn = document.querySelector('.btn');

        viewAllBtn.addEventListener('click', () => {
            window.location.assign('Admin-2.html')
        })

        let favourites = JSON.parse(localStorage.getItem('take')) || [];

        function loadTasks(tasks) {
            let tbody = document.querySelector('tbody');
            tbody.innerHTML = '';
            // for (let i = tasks.length - 1; i >= tasks.length - 6; i--) {
            for (let i = 0; i < 5; i++) {
                let tr = document.createElement('tr');
                for (const key in tasks[i]) {
                    let td = document.createElement('td');
                    td.textContent = tasks[i][key];
                    tr.appendChild(td);
                }
                let td = document.createElement('td');
                let remBtn = document.createElement('button');
                remBtn.className = "ji";
                remBtn.textContent = 'Remove';
                remBtn.addEventListener('click', function () {
                    let remove = JSON.parse(localStorage.getItem('take')) || [];
                    remove.splice(i, 1);
                    console.log(remove);
                    localStorage.setItem('take', JSON.stringify(remove));
                    loadTasks(remove);
                });
                td.appendChild(remBtn);
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
        }
        loadTasks(favourites);
    })
}



let tasks = JSON.parse(localStorage.getItem('take')) || [];
let recentCustomerData = document.querySelector('.recentCustomers>table');

for (let i = tasks.length - 1; i >= tasks.length - 6; i--) {
    recentCustomerData.innerHTML += `
  <tr>
  <td width="60px">
      <div class="imgBx"><img src="imgs/jpg.jpg" alt=""></div>
  </td>
  <td>
      <h4>${tasks[i].Name} <br> <span>${tasks[i].Email}</span></h4>
  </td>
  </tr>`
}

let get_statusProgress = document.getElementsByClassName('inProgress');


for (let i = 0; i < get_statusProgress.length; i++) {
    get_statusProgress[i].addEventListener('click', () => {
        get_statusProgress[i].innerHTML = 'Pending';
        get_statusProgress[i].classList = 'status pending';
    })
}


let get_statusPending = document.getElementsByClassName('pending');

for (let i = 0; i < get_statusPending.length; i++) {
    get_statusPending[i].addEventListener('click', () => {
        get_statusPending[i].innerHTML = 'Delivered';
        get_statusPending[i].classList = 'status delivered'
    })
}

let get_statusDelivered = document.getElementsByClassName('delivered');

for (let i = 0; i < get_statusDelivered.length; i++) {
    get_statusDelivered[i].addEventListener('click', () => {
        get_statusDelivered[i].innerHTML = 'Return';
        get_statusDelivered[i].classList = 'status return';
    })
}

let get_statusReturn = document.getElementsByClassName('return');

for (let i = 0; i < get_statusReturn.length; i++) {
    get_statusReturn[i].addEventListener('click', () => {
        get_statusReturn[i].innerHTML = 'In Progress';
        get_statusReturn[i].classList = 'status inProgress';
    })
}