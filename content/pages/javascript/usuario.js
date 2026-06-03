let dados = [
    {id: 1, nome:"Reginaldo", nascimento:"1874-20-04"},
    
]

function lerDados() {
    var tabdados = document.querySelector(".tabela-dados");
    var elementos = "";
    dados.map(d => (
        elementos += `<tr>
                <td>${d.nome}</td>
                <td>${d.nascimento}</td>
                <td>
                    <button type={button} onclick={edit(${d.id})}>Editar</button>
                    <button type={button} onclick={Deletar(${d.id})}>Deletar</button>
                </td>
            </tr>`
    ))
    tabdados.innerHTML = elementos;
}

function Addform() {
    document.querySelector(".addpet").style.display = "block";
    document.querySelector(".add").style.display = "none";
}

function Addpet() {
    event.preventDefault()
    var nome = document.querySelector(".petnome").value;
    var nascimento = document.querySelector(".petnasc").value;
    

    var newpet ={id: 2, nome, nascimento};
    dados.push(newpet);
 
    document.querySelector(".addpet").style.display = "none";
    document.querySelector(".add").style.display = "block";
    lerDados();
}

function edit(id) {
    document.querySelector(".editpet").style.display = "block";
    document.querySelector(".add").style.display = "none";
    
    var update = dados.find(f => f.id === id);
    document.querySelector('.uid').value = update.id;
    document.querySelector('.unome').value = update.nome;
    document.querySelector('.unasc').value = update.nascimento;
}

function Update() {
    var id = parseInt(document.querySelector('.uid').value);
    var nome = document.querySelector('.unome').value;
    var nascimento = document.querySelector('.unasc').value
    var update = {id, nome, nascimento};

    var index = dados.findIndex(f => f.id === id);
    dados[index] = update;
    document.querySelector(".editpet").style.display = "none";
    document.querySelector(".add").style.display = "block";

    lerDados();
}

function Deletar(id) {
    var newdata = dados.filter(f => f.id !== id);
    dados = newdata;
    
    lerDados();
}