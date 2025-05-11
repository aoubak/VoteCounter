
const containers = document.querySelectorAll(".container");

containers.forEach(container => {

    const counter = container.querySelector(".counter");
    const addbtn = container.querySelector(".add");
    const minesbtn = container.querySelector(".mines");
    const resetbtn = container.querySelector(".reset");

    let count = parseInt(counter.textContent);

    addbtn.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });

    minesbtn.addEventListener('click', () =>{
        if(count > 0){
            count--;
            counter.textContent = count;
        }
        
    });

    resetbtn.addEventListener('click', () =>{
        count = 0
        counter.textContent = count;
    });



});

