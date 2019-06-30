import { keyBoadCode } from '../../../../shared/constants/keyCodeConstant'
import * as UtilStage from '../../../../shared/state'

var defaultEventEmitter = function (shapeBase, instance, textShape) {

    let container = UtilStage.getContainer()
    container.tabIndex = 1
    container.focus()
    const DELTA = 4;

    instance.on('mousedown mouseover mouseout mouseup mousemove', function (evt) {
        textShape.setX(this.getX() - 17)
        textShape.setY(this.getY() - 8)
        UtilStage.drawShape()
    })

    instance.on('mouseout', function (evt) {
        UtilStage.removeCurrentShape(this)
    })

    instance.on('mousedown mousemove', function (evt) {
        UtilStage.addCurrentShape(this)
        shapeBase.connect(evt.evt, this)
    })

    container.addEventListener('keydown', function (e) {

        if (UtilStage.getCurrentShapeSelected() != instance)
            return
        if (e.keyCode === keyBoadCode.arrowLeft) {
            instance.x(instance.x() - DELTA)
        } else if (e.keyCode === keyBoadCode.arrowUp) {
            instance.y(instance.y() - DELTA)
        } else if (e.keyCode === keyBoadCode.arrowRight) {
            instance.x(instance.x() + DELTA)
        } else if (e.keyCode === keyBoadCode.arrowDown) {
            instance.y(instance.y() + DELTA)
        } 
        else if (e.keyCode === keyBoadCode.f4){
            shapeBase.loadProperties();
        }
        else {
            return;
        }
        shapeBase.draw()
    })
}

export default defaultEventEmitter