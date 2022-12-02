const id = location.href.split("?")[1];


onload = () => {
    detalhes();
    
    }
    
    
    async function detalhes() {
        let str = "";
        let data = await fetch(`https://api.rawg.io/api/games/${id}?key=dd0514c8b5814a4299231331117a36cd`).then((res) => res.json());
        let genero= "";
        for(let i=0;i<data.genres.length;i++){
         let gen=data.genres[i];
         genero+= gen.name+", ";   
        }
        let publi= "";
        for(let i=0;i<data.publishers.length;i++){
            let publ=data.publishers[i];
            publi+= publ.name+", ";   
           }
            str = `<div class="container-fluid" style="background-color: rgb(233, 233, 233); --darkreader-inline-bgcolor:#242729;" data-darkreader-inline-bgcolor="">
            <div class="card mb-3">
                <div class="row">
                    <div class="col-md-6 py-3 text-center" style="background-color: rgb(233, 233, 233); --darkreader-inline-bgcolor:#242729;" data-darkreader-inline-bgcolor="">
                    <img style="width:80%;" src="${data.background_image}" alt="">
                    </div>
                    <div class="col-md-6 py-2 d-flex" style="background-color: rgb(233, 233, 233); --darkreader-inline-bgcolor:#242729;" data-darkreader-inline-bgcolor="">
                        <div class="card-body">
                            <h1 class="card-title">${data.name}</h1>
                            <p id="p-destaques"><h2>Sobre:</h2>${data.description}</p>
                            <p id="p-destaques"><b>Publisher:</b>${publi}<b>&nbsp;&nbsp; Lançamento:</b> oct, 2018</p>
                            <p id="p-destaques"><b>Gênero:</b>${genero}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    
        document.getElementById("detalhes").insertAdjacentHTML("beforeend", str);
    }