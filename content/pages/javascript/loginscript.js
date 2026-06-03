function logar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    
    if(login === "tutor" && senha === "123456"){
        window.open("homepagetutor.html")
    }
     else if (login ==="Ong" && senha === "ong$-135"){ 
        window.open("homepageong.html") 
    }
    else if (login ==="prefeitura" && senha === "pref@456"){
        window.open("homepagepref.html")
    }
    else{
        alert("Usuario ou senha invalido, tente novamente!")
        return
    }
}