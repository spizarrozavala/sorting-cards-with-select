let pinta = ["\u2660", "\u2663", "\u2665", "\u2666"];
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let resultadoCartas = [];
let input = document.querySelector("#input");
let draw = document.querySelector("#draw");
let sort = document.querySelector("#sort");
let segundaLinea = document.querySelector(".segundaLinea");
let cuartaLinea = document.querySelector(".cuartaLinea");

draw.addEventListener("click", (e) => {
    segundaLinea.innerHTML = "";
    resultadoCartas = [];
    for (i=0; i < input.value ; i++){
        let pintaRandom = Math.floor(Math.random()*pinta.length);
        let numeroRandom = Math.floor(Math.random()*numero.length);
        // console.log(pintaRandom)
        // console.log(numeroRandom)
        let pintaFinal = pinta[pintaRandom];
        let numeroFinal = numero[numeroRandom];
        // console.log(pintaFinal);
        // console.log(numeroFinal);
        resultadoCartas.push({pinta: pintaFinal, numero: numeroFinal});
        // console.log(resultadoCartas)
        let newCard = document.createElement('div');
        newCard.classList.add("card");
        segundaLinea.appendChild(newCard);

        let newCardHeader = document.createElement('div');
        newCardHeader.classList.add("card-header");
        newCardHeader.innerHTML = pintaFinal; 
        newCard.appendChild(newCardHeader);

        let NewCardBody = document.createElement('div');
        NewCardBody.classList.add("card-body");
        NewCardBody.innerHTML = numeroFinal;
        newCard.appendChild(NewCardBody);

        let newCardFooter = document.createElement('div');
        newCardFooter.classList.add("card-footer");
        newCardFooter.innerHTML = pintaFinal;
        newCard.appendChild(newCardFooter);
        if (pintaFinal !== "\u2660" && pintaFinal !== "\u2663"){
            newCardHeader.style.color = "red";
            newCardFooter.style.color = "red"
        } else {
            newCardHeader.style.color = "black";
            newCardFooter.style.color = "black"
        }
        
    }
})

sort.addEventListener("click" , (e) =>{
    cuartaLinea.innerHTML = "";
    let bubbleSort = arr => {
        let wall = arr.length - 1
        while (wall > 0) {
            let index = 0;
            while (index < wall) {
                if (arr[index].numero > arr[index + 1].numero) {
                    let aux = arr[index];
                    arr[index] = arr[index + 1];
                    arr[index + 1] = aux;
                }
                let newOrderLine = document.createElement('div');
                newOrderLine.classList.add('orderLine');
                for (i=0 ; i < arr.length; i++){


                    let newOrder = document.createElement('div');
                    newOrder.classList.add('card');
                    
                    newOrderLine.appendChild(newOrder);

                    let newOrderHeader = document.createElement('div');
                    newOrderHeader.classList.add('header');
                    newOrderHeader.innerHTML = arr[i].pinta;
                    newOrder.appendChild(newOrderHeader);

                    let newOrderBody = document.createElement('div');
                    newOrderBody.classList.add('body');
                    newOrderBody.innerHTML = arr[i].numero;
                    newOrder.appendChild(newOrderBody);

                    let newOrderFooter = document.createElement('div');
                    newOrderFooter.classList.add('footer');
                    newOrderFooter.innerHTML = arr[i].pinta;
                    newOrder.appendChild(newOrderFooter);

                    if( arr[i].pinta !== "\u2660" && arr[i].pinta !== "\u2663"){
                        newOrderHeader.style.color = "red";
                        newOrderFooter.style.color = "red";
                    }
                }
                cuartaLinea.appendChild(newOrderLine);
                index++;
            }
            wall--;
        }
        return arr;
    }
    console.log(bubbleSort([...resultadoCartas]));
})
