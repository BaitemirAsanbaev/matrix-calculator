let karabkirov = document.querySelector('#karabakirov>img')
let state = ''
let order = document.querySelector('#order')
let matrix = document.querySelector('#matrix-inps')
let orderValue = 0
let submit = document.querySelector('#submit')
let clear = document.querySelector('#clear')
let determinant = 0
let result = document.querySelector('#result')

order.addEventListener('input', (e)=>{
  karabkirov.className = 'anim'
  setTimeout(()=>{
    karabkirov.className = ''
  }, 2000)
  karabkirov.setAttribute('src', './assets/karabakirov-think.svg')
  matrix.innerHTML=''
  const min = 0
  const max = 3
  if(e.target.value > max){
    e.target.value = max
  }
  if(e.target.value < min){
    e.target.value = min
  }
  orderValue = e.target.value
  for (let i = 0; i < orderValue; i++) {
    let matrix_tr = document.createElement('tr')
    matrix.append(matrix_tr)
    for (let j = 0; j < orderValue; j++) {
    let matrix_td = document.createElement('td')
    let matrix_inp = document.createElement('input')
    matrix_inp.id = `${i+1}${j+1}`
    console.log(matrix_inp.id);
    matrix_inp.type = 'number'
    matrix_inp.style.width = '50px'
    matrix_td.append(matrix_inp)
    matrix_tr.append(matrix_td)
    }
  }
})

submit.addEventListener('click',()=>{
  karabkirov.className = 'anim'
  setTimeout(()=>{
    karabkirov.className = ''
  }, 2000)
  karabkirov.setAttribute('src', './assets/karabakirov-happy.svg')
  if(orderValue == 1){
    determinant = document.getElementById('11').value
    result.innerText = `Ответ: ${determinant}`
  }
  else if(orderValue == 2){
    let main_branch = parseInt(document.getElementById('11').value) * parseInt(document.getElementById('22').value)
    let secondary_branch = parseInt(document.getElementById('12').value) * parseInt(document.getElementById('21').value)
    determinant = main_branch - secondary_branch
    result.innerText = `Ответ: ${determinant}`
  }
  else if(orderValue == 3){
    let main_branch = parseInt(document.getElementById('11').value) * parseInt(document.getElementById('22').value) * parseInt(document.getElementById('33').value)  
    let secondary_branch = parseInt(document.getElementById('13').value) * parseInt(document.getElementById('22').value) * parseInt(document.getElementById('31').value)
    let main_triangle_1 = parseInt(document.getElementById('13').value) * parseInt(document.getElementById('21').value) * parseInt(document.getElementById('32').value)
    let main_triangle_2 = parseInt(document.getElementById('31').value) * parseInt(document.getElementById('12').value) * parseInt(document.getElementById('23').value)
    let secondary_triangle_1 = parseInt(document.getElementById('33').value) * parseInt(document.getElementById('21').value) * parseInt(document.getElementById('12').value)
    let secondary_triangle_2 = parseInt(document.getElementById('11').value) * parseInt(document.getElementById('32').value) * parseInt(document.getElementById('23').value)
    determinant = main_branch + main_triangle_1 + main_triangle_2 - secondary_branch - secondary_triangle_1 - secondary_triangle_2
    result.innerText = `Ответ: ${determinant}`
  }
})

clear.addEventListener('click', ()=>{
  karabkirov.className = 'anim'
  setTimeout(()=>{
    karabkirov.className = ''
  }, 2000)  
  order.value = ''
  result.innerText = ''
  for (let i = 0; i < orderValue; i++) {
    for (let j = 0; j < orderValue; j++) {
      let del_inp = document.getElementById(`${i+1}${j+1}`)
      del_inp.value = ''
    }
  }
  karabkirov.setAttribute('src', './assets/karabakirov.svg')

})
