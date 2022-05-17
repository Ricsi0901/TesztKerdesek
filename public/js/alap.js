
$(function () {
    const tomb=[];
    myAjax.getjson("tesztek", tomb,megjelenit);


function megjelenit (){

const szuloElem = $(".article");
const sablonElem = $(".kerdesValasz");
  

szuloElem.empty();


tomb.forEach(function (elem) {
    
        let node = sablonElem.clone().appendTo(szuloElem);
        const obj = new Kartya(node, elem);
   
});
sablonElem.hide(); //sablonelem eltávolítása
}
});
