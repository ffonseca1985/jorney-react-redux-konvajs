import * as UtilStage from  '../../../../shared/state'

var eventEmitter = (validador) => {

    validador.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    validador.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    validador.on('mousedown', function (evt) {})

    validador.on('mousemove', function (evt) {})

    validador.on('keydown', function (evt) {
    })
}

export default eventEmitter
