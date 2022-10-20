const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
console.log(holes)
const scoreEl = document.querySelector('.score span');
let score = 0;
let timer = null;
function run (){
    const i = Math.floor(Math.random()*holes.length)
    const hole = holes[i]

    const img = document.createElement('img');
    img.classList.add('lyam')
    img.src = "lyam.png"
    hole.appendChild(img)

    img.addEventListener("click", ()=>{
        score += 10;
        scoreEl.textContent = score;
        img.src = "lyam-goal.png"
        
    })
    timer = setTimeout(()=>{
        hole.removeChild(img)
        run()
    }, 1000)
}
run();

window.addEventListener('mousemove', e =>{
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
});

