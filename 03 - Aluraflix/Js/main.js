let listaFilmes = [
    "https://br.web.img2.acsta.net/medias/nmedia/18/77/00/94/19961049.jpg",
    "https://br.web.img3.acsta.net/medias/nmedia/18/78/55/79/19678389.jpg",
    "https://br.web.img3.acsta.net/pictures/14/04/16/17/54/526761.jpg",
    "https://br.web.img3.acsta.net/pictures/18/07/17/12/33/0816194.jpg",
    "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
    "https://upload.wikimedia.org/wikipedia/pt/3/3a/About_Time.jpg",
    "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg"
];

let listaNomes = ['Chuck', 'Castle', 'Avatar', 'O Principe Dragão', 'Matrix', 'Questão de Tempo', 'Fullmetal Alchemist', 'Steins;Gate'];

for (let i=0; i < listaFilmes.length; i++) {
    if (listaFilmes[i].endsWith("jpg")) {
    document.write('<img src=' + listaFilmes[i] + '>');
    document.write('<p>' + listaNomes[i] + '</p>');
    };
};

/*

Resolução do Instrutor

var listaFilmes = ['https://1.bp.blogspot.com/-SWt9furxjhU/WD4cHIz_g3I/AAAAAAAB3R0/DCU7KcT8Kykcof5I8IYFiMiPNodwH6AkgCLcB/s1600/Capit%25C3%25A3o%2BFant%25C3%25A1stico.jpg', 'https://live.staticflickr.com/3327/3428645998_e6a6775888_z.jpg', 'https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg', 'https://m.media-amazon.com/images/I/81Z6-ieAIyL.jpg', 'https://viureview.com.br/images/filmes8/La-la-land.jpg', 'https://static.rogerebert.com/uploads/movie/movie_poster/the-bridges-of-madison-county-1995/large_czRuGEx9Yhnh6nApirTLPToxHNu.jpg', 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg', 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg', 'https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Amsterdam_%282022_film%29.jpg/220px-Amsterdam_%282022_film%29.jpg'];

//desafio 2 - adicionar itens na lista usando o .push

listaFilmes.push('https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg', 'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg');

var nomeFilmes = ['Capitão Fantástico', 'Kill Bill 1', 'Estrelas além do tempo', 'O grande hotel Budapeste', 'La La Land', 'As pontes de Madison', 'Soul', 'Bastardos Inglórios', 'A viagem de Chihiro', 'Amsterdam', 'Divertidamente', 'Harry Potter e a Câmara Secreta'];

document.write('<div class="container_todosFilmes">')
//desafio 1 - transformar for em while
var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeFilmes[i] +'</p>'); //desafio 4 - colocar titulos embaixo da imagem
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')

*/