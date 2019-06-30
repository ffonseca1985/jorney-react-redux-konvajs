import * as UtilStage from  '../../../../shared/state'

var eventEmitter = (cs) => {

    cs.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    cs.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    cs.on('mousedown', function (evt) {})

    cs.on('mousemove', function (evt) {})

    cs.on('keydown', function (evt) {
    })
}

export default eventEmitter
