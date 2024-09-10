function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //campoPesquisa = ""
    if(!campoPesquisa) {
        section.innerHTML = "Busca Vazia"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    //para cada dado dentro da lista de dados 
    for (let raca of racasDeGatos) {
        titulo = raca.titulo.toLowerCase();
        descricao = raca.descricao.toLowerCase();
        tags = raca.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado"> 
                <h2>
                    <a href="#" target=_blank>${raca.titulo}</a>
                </h2> 
                    <p class="descricao-meta">${raca.descricao}</p> 
                <a href=${raca.link} target="_blank">Mais informações</a>
            </div>
            `
            
        }
    };

    if(!resultados){
        resultados = "Nada foi encontrado"
    };

    section.innerHTML = resultados
};




