import * as UtilStage from  '../../../../shared/state'

var eventEmitter = (coletorDigitos) => {

    coletorDigitos.on('mouseover', function (evt) {
        this.setStrokeWidth(3);
        UtilStage.drawShape()
    })

    coletorDigitos.on('mouseout', function (evt) {
        this.setStrokeWidth(1);
        UtilStage.drawShape()
    })

    coletorDigitos.on('mousedown', function (evt) {})

    coletorDigitos.on('mousemove', function (evt) {})

    coletorDigitos.on('keydown', function (evt) {
    })
}

export default eventEmitter
