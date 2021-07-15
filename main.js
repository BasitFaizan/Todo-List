show();
let label = document.querySelector('.label');
let labelContent = document.querySelector('.labelContent');
let updown = document.querySelector('.updown')
//let h1 = document.querySelectorAll('.h1')
label.addEventListener('click',function(){
  labelContent.classList.toggle('active');
  updown.classList.toggle('active')
})
labelContent.addEventListener('click',function(e){
  labelContent.classList.remove('active');
  updown.classList.remove('active');
})
let addBtn = document.querySelector('.addBtn');
let cancel = document.querySelector('.cancel')
let add = document.querySelector('.add');
addBtn.addEventListener('click',function(){
  add.classList.toggle('active');
})
let Title = document.querySelector('.Title');
let List = document.querySelector('.List');
cancel.addEventListener('click',function(){
  add.classList.toggle('active');
  Title.value= '';
  List.value = '';
  label.value = '';
})
let h1 = document.querySelector('.h1');
let h2 = document.querySelector('.h2');
let h3 = document.querySelector('.h3');
let h4 = document.querySelector('.h4');
h1.addEventListener('click',function(){
  label.value = h1.innerHTML;
  
})
h2.addEventListener('click',function(){
  label.value = h2.innerHTML;
  
})
h3.addEventListener('click', function() {
  label.value = h3.innerHTML;
  
})
h4.addEventListener('click', function() {
  label.value = h4.innerHTML;
  
})

let submit = document.querySelector('.submit');
submit.addEventListener('click',function(){
  let notes = localStorage.getItem('notes');
  if (notes==null){
    myObj = []
  }
  else{
    myObj = JSON.parse(notes);
  }
  let obj = {
    title1 : Title.value,
    list1 : List.value,
    label : label.value
  }
  //console.log(obj);
  myObj.push(obj);
  localStorage.setItem('notes',JSON.stringify(myObj));
  Title.value = '';
  List.value = '';
  label.value = '';
  show();
});

function show(){
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    myObj = []
  }
  else {
    myObj = JSON.parse(notes);
  }
  let html = '';
  myObj.forEach(function(element,index){
    html += `
      <div class="listOption">
        <div class="firstPart">
          <h2 class="labelShow">${element.label}</h2>
          <h2 class="delete" onclick = 'del(this.index)'>X</h2>
        </div>
        <div class="secondPart">
          <h2 class="TitleShow">${element.title1}</h2>
          <h2 class="ListShow">${element.list1}</h2>
        </div>
      </div>`
  })
  
  let mainStore = document.querySelector('.mainStore');
  mainStore.innerHTML = html;
}
function del(index){
  let notes = localStorage.getItem('notes');
  if (notes == null) {
    myObj = []
  }
  else {
    myObj = JSON.parse(notes);
  }
  myObj.splice(index,1);
  localStorage.setItem('notes',JSON.stringify(myObj));
}
