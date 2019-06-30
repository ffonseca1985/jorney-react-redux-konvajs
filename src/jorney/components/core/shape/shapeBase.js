import Konva from 'konva'
import * as UtilStage from '../../../shared/state'
import { mouseCode } from '../../../shared/constants/keyCodeConstant'
import Connector from '../connector/connector'
import defaultEventEmitter from  '../shape/events/defaultEventEmitter'
import swal from 'sweetalert'

class ShapeBase {

    constructor(totalConnector = 1) {
        this.shape = {}
        this.x = window.innerWidth / 2
        this.y = window.innerHeight / 2
        this.fontSize = 12
        this.fontFamily = 'Calibri'
        this.fill = '#555'
        this.align = 'center'
        this.fillTextShape = 'black'
        this.draggable = true
        this.totalConnector = totalConnector
        this.clearConnector()
        this.container = UtilStage.getContainer()
    }
    setImage(image) {
        this.image = image;
        this.image.width = window.innerWidth*0.05
        this.image.height = window.innerHeight*0.1
    }

    create(shape, config, text) {
        this.shape = Object.create(shape.prototype);
        this.shape.constructor(config)
        return this.shape
    }

    clearConnector() {
        this.shape.connectors = []
    }

    load(text, instance, customEventEmitter) {
        this.drawAndAddShape(instance)
        this.loadDescription(text)
        this.loadEvents(customEventEmitter, instance)
        this.clearConnector()
    }

    loadEvents = (customEventEmitter, instance) => {

        var self = this

        customEventEmitter(instance);
        defaultEventEmitter(this, instance, self.textShape)
    }

    connect(evt, instance) {
        
        UtilStage.addCurrentShape(instance)

        if (evt == null || evt == undefined)
            return;

        if (evt.button != mouseCode.rigthButton)
            return;

        if (this.shape.connectors.length >= this.totalConnector) {
            swal('Ops...', `This component only do  ${this.totalConnector} connections!!`, 'error')
            return
        }

        var initialConnection = {
            point: [instance.getX() + this.image.width, instance.getY() + this.image.height/2],
            shape: instance
        }

        var finalConnection = {
            point: [evt.pageX, evt.pageY + this.image.height/2],
            shape: null
        }

        var connector = new Connector(initialConnection, finalConnection);
        
        this.shape.connectors.push(connector)
        UtilStage.drawAndAddShape(connector.getArrow())
    }

    drawAndAddShape(instance) {
        UtilStage.drawAndAddShape(instance)
    }

    draw() {
        UtilStage.drawShape()
    }

    loadDescription(text) {

        var self = this

        this.textShape = new Konva.Text({
            x: self.x - 17,
            y: self.y - 8,
            fontSize: self.fontSize,
            fontFamily: self.fontFamily,
            fill: self.fillTextShape,
            align: self.align,
            text: text
        })

        // this.textShape.setListening(false)
        // UtilStage.drawAndAddShape(this.textShape)
    }

    createConfiguration() { }
    loadProperties() { }
}

export default ShapeBase