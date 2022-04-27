let url = 'https://api.adviceslip.com/advice';
let btn = document.querySelector('.btn');
function getRequest(){
    fetch(url)
    .then(respons => respons.json())
    .then(data =>  innerData(data.slip));
}
  getRequest();
function innerData(data) {
    let {id, advice} = data;
    document.querySelector('#id').textContent = id;
    document.querySelector('.advise__text').textContent = advice;
}
console.log(btn);
btn.addEventListener('click', () => {
    getRequest();
});

