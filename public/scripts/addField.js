function  main(){
    const cloneField = document.querySelector("#add-time");
    cloneField.addEventListener("click", (e)=>{
        const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);//Clona o elemento selecionado. Se setado o parâmetro como true, ele clonará o elemento e seus filhos.
        const fields = newFieldContainer.querySelectorAll('input');//Seleciona todos inputs
        fields.forEach((e)=>{
            e.value = "";
        })

        document.querySelector("#schedule-items").appendChild(newFieldContainer);//Adiciona o clone no elemento setado
    })
}
main();