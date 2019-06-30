import * as UtilStage from  '../../../../shared/state'

var eventEmitter = (init) => {

    init.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    init.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    init.on('mousedown', function (evt) {})

    init.on('mousemove', function (evt) {})
}

export default eventEmitter
