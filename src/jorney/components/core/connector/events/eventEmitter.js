import { drawShape } from '../../../../shared/state'
import { getStage, isShapeSelected, getCurrentShapeSelected } from '../../../../shared/state'
import { mouseCode } from '../../../../shared/constants/keyCodeConstant'

var eventEmitter = (connector) => {

    getStage().on('mousemove', function (evt) {
        ajustFinalPoint(evt.evt.offsetX, evt.evt.offsetY)
    })

    connector.initialconnection.shape.on('dragmove', function(evt){
        
        ajustInitialPoint(this.getX(), this.getY(), this)
    })

    connector.arrow.on('mousedown', function (evt) {

        if (evt.evt.button === mouseCode.rigthButton){
            this.destroy();
            clearConnection()
        }
    })

    connector.arrow.on('pointsChange', function (evt) {

        var shape = getCurrentShapeSelected()
        
        if (isShapeSelected() && shape !== connector.initialconnection.shape) {
            connectFinalConnection(shape)
        }
    })

    var clearConnection = function() {
        connector.initialconnection.shape.connectors = []
    }

    var connectFinalConnection = function (shape) {

        connector.arrow.dashEnabled(false)
        getStage().off('mousemove')
        connector.arrow.off('pointsChange')
        ajustFinalPoint(shape.getX(), shape.getY(), shape)

        connector.finalConnection.shape.on('dragmove', function(evt){
            ajustFinalPoint(this.getX(), this.getY(), this)
        })
    }

    var ajustInitialPoint = function(pointX, pointY, shape){

        connector.initialconnection = {
            point: [pointX, pointY],
            shape: shape
        }

        var points = getPoints()
        connector.arrow.setPoints(points)
        drawShape()
    }

    var ajustFinalPoint = function (pointX, pointY, shape = null) {

        connector.finalConnection = {
            point: [pointX, pointY],
            shape: shape
        }

        var points = getPoints()
        connector.arrow.setPoints(points)
        drawShape()
    }

    var getPoints = function () {

        var points = [connector.initialconnection.point[0], connector.initialconnection.point[1], connector.finalConnection.point[0], connector.finalConnection.point[1]]
        return points
    }
}

export default eventEmitter