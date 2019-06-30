import * as UtilStage from  '../../../../shared/state'

var eventEmitter = (reference) => {

    reference.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    reference.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    reference.on('mousedown', function (evt) {})

    reference.on('mousemove', function (evt) {})

    reference.on('keydown', function (evt) {
    })
}

export default eventEmitter
