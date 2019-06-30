import Konva from 'konva'
import eventEmitter from './events/eventEmitter'

class Connector {
    
    constructor(initialconnection, finalConnection){
                
        this.initialconnection = {
            point: initialconnection.point,
            shape: initialconnection.shape
        }

        this.finalConnection = {
            point: finalConnection.point,
            shape: finalConnection.shape
        }

        this.arrow = new Konva.Arrow({
            points: this.initialconnection.point.concat(this.finalConnection.point),
            pointerLength: 10,
            pointerWidth: 10,
            fill: '#8B7D7B',
            dash:[5,5],
            stroke: '#8B7D7B',
            strokeWidth: 4
        });

        eventEmitter(this)
    }

    getArrow(){
        return this.arrow
    }
}

export default Connector