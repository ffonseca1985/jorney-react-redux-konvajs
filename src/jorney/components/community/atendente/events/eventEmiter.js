import * as UtilStage from  '../../../../shared/state'

var eventEmitter = (atendente) => {

    atendente.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    atendente.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    atendente.on('mousedown', function (evt) {})

    atendente.on('mousemove', function (evt) {})

    atendente.on('keydown', function (evt) {
    })
}

export default eventEmitter
