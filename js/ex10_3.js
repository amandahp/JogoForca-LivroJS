// Programa JS que realiza o cadastro das palavras (utiliza localStorage)

function cadastrarPalavra() {
    console.log('aqui')
    //cria referência ao elemento de entrada de dados
    var inPalavra = document.getElementById("inPalavra");
    var inDica = document.getElementById("inDica");

    var palavra = inPalavra.value // ontém conteúdo dos campos
    var dica = inDica.value

    // valida preenchimento (palavr não deve possuir espaço em branco)

    if (palavra == "" || dica == "" || palavra.indexOf(" ") >= 0) {
        alert("Informe uma palavara válida (sem espaços) e sua dica correspondente");
        inPalavra.focus();
        return;
    }

    //se já existe conteudo registrado
    if (localStorage.getItem("jogoPalavra")) {
        // grava conteúdo anterior + ";" e a palavra / dica
        localStorage.setItem("jogoPalavra",
            localStorage.getItem("jogoPalavra") + ";" + palavra);
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);

    } else {
        // senão, é a primeira inclusão: grava apenas a palavras e dica
        localStorage.setItem("jogoPalavra", palavra);
        localStorage.setItem("jogoDica", dica);
    }
    // verifica se salvou
    if (localStorage.getItem("jogoPalavra")) {
        alert("Ok! Palavra " + palavra + " Cadastrada com Sucesso");
    }

    inPalavra.value = ""; //limpa campos de edição
    inDica.value = "";
    inPalavra.focus(); //joga foco em inPalavra


}

// cria referência ao elemento btCadastrar e associa function ao evento click
var btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", cadastrarPalavra);

/*OBS: O código armazena dados em duas variáveis de localStorage: jogoPalavra e jogoDica. 
Ao acrescentar uma nova palavra ou dica, o delimitador ";", é acrescentado na variável*/