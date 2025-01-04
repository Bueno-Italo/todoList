const texto = document.querySelector('input')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const ul = document.querySelector('ul')

var itensDB = []

//Eventos para trabalhar com as LIs na tela

btnDeleteAll.onclick = () => {
  itensDB = []
  updateDB
}

texto.addEventListener('keypress') , e => {
    if (e.key == 'Enter' && texto.value != '') {
        setItenDb()
    }
}

btnInsert.onclick = () => {
    if (texto.value != '') {
        setItenDb()
    }
}

function setItemDB() {
    if (itensDB.length >= 20) {
      alert('Limite máximo de 20 itens atingido!')
      return
    }
  
    itensDB.push({ 'item': texto.value, 'status': '' })
    updateDB()
  }

  function updateDB() {
    localStorage.setItem('todoList', JSON.stringify(itensDB))
  } 

  function loadItens() {
    ul.innerHTML = '';
    intensDB = JSON.parse(localStorage.getItem('todoList')) ?? []
    intensDB = forEach((item, i) => {
        insertItemTela(item.item, item.status, i)
    })
  }

  function insertItemTela(text, status, i) {
      const li = documentElement('li')

      li.innerHTML = `
          <div class="divLi>
              <input type="checkbox" ${status} data-i= ${i} onchange="done(this, ${i});" />
              <spam data-si = ${i}> ${text}</spam>
              <button button onclick="removeItem(${i})" data-i = ${i}><i class='bx bx-trash'></i></button>
          </div>
          `
          ul.appendChild(li)

          if (status) {
              document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
            } else {
              document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
            }
          
            texto.value = ''
  }

  function done(chk, i) {
    if(chk.checked) {
      itensDB[i].status = 'checked'
    } else {
      itensDB[i].status = ''
    }
    updateDB()
  }

  function removeItem(i) {
    intensDB.splice(i, 1)
    updateDB()
  }

  loadItens()