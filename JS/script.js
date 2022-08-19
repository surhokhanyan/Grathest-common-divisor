let btn = document.querySelector("#btn");
let text = document.querySelector("#main p");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

btn.addEventListener("click", ()=>{
    let aVal = a.value;
    let bVal = b.value;
    let cVal = c.value;
    if (aVal > 0 && bVal >0 && cVal >0){
        const grather = (...arr) => {
            const gratherFunc = (x, y) => {
                if (y ===0){
                    return x;
                }else{
                    return grather(y, x%y);
                }
            }
            return [...arr].reduce((a, b) => gratherFunc(a, b));
        };
        text.innerHTML = `The greatest common divisor of the ${aVal}, ${bVal}, ${cVal} is ` + grather(...[aVal, bVal, cVal]);
    }else{
        text.innerHTML = "Please write a positive numbers"
    }

});

