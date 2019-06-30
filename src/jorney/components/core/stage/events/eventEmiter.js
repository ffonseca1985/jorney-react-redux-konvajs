
import InterationsClientStage from '../../../community/stage/interations/interationsClientStage'

var eventEmiter = (stage) => {

    stage.on('mouseover', function (evt) {
    })

    stage.on('mousedown', function (evt) {
        InterationsClientStage.loadShapes(evt)
    })

    stage.on('mousemove', function (evt) {
       // alert('move')
    })  

    stage.on('click tap', function (e) {
        
        // if (e.target === stage) {
        //   stage.find('Transformer').destroy();
        //   layer.draw();
        //   return;
        // }
                
        // stage.find('Transformer').destroy();
  
        // var tr = new Konva.Transformer();
        // layer.add(tr);
        // tr.attachTo(e.target);
        // layer.draw();
    })
}

export default eventEmiter