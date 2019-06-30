import * as UtilStage from  '../../../../shared/state'

var eventEmitter = (menu) => {

    menu.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    menu.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    menu.on('mousedown', function (evt) {})

    menu.on('mousemove', function (evt) {})

    menu.on('keydown', function (evt) {
    })
}

export default eventEmitter
