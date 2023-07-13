/*let object = document.querySelector(".svg-image");
object.addEventListener('load' , function(){
    console.log('Вот теперь данные загрузились');
    let svgFile = object.getSVGDocument();
    let svgElement = svgFile.getElementById("text9");
    let r = 56;
    svgElement.textContent = r;
    })

/**/
let svgObject = document.querySelector('#svg5355');
console.log(svgObject)
let gFiles = document.querySelectorAll('#svg5355 > *');
let zoom = d3.zoom().on('zoom', handleZoom);

function handleZoom(e) {
  gFiles.forEach(function(gFile){
    d3.select(gFile).attr('transform', e.transform);
  })

}

function initZoom() {
    d3.select('#svg5355').call(zoom);
}

//initZoom();
//function a(){
//let cont  =document.querySelector('div');
//let zoom = d3.select('#svg5355');

//}

setTimeout(initZoom, 1000);


/* 
function a () {
  let svgObject = document.querySelector('iframe');
  let svgFile = svgObject.contentWindow.frameElement.contentDocument.querySelector('svg');
  let gFiles = svgObject.contentWindow.frameElement.contentDocument.querySelectorAll('svg > *');
  console.log(gFiles)
  let zoom = d3.zoom().on('zoom', handleZoom);
  d3.select(svgFile).call(zoom);
  function handleZoom(e) {
    gFiles.forEach(function(gFile){
      d3.select(gFile).attr('transform', e.transform);
    })
    
  }
}
setTimeout(a, 500); */

  