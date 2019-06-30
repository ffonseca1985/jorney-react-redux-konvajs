import * as UtilStage from  '../../../../shared/state'

var eventEmitter = (tchau) => {

    tchau.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    tchau.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    tchau.on('mousedown', function (evt) {})

    tchau.on('mousemove', function (evt) {})

    tchau.on('keydown', function (evt) {
    })
}

export default eventEmitter
