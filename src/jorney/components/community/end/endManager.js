
import Konva from 'konva'
import ShapeBase from '../../core/shape/shapeBase'
import eventEmiter from './events/eventEmiter'

class EndManager extends ShapeBase{

    create(text){
        var instance = super.create(Konva.Image, this.createConfiguration(), text)
        this.load(text, instance, eventEmiter)
        return instance
    }

    createConfiguration(){
        
        var self = this

        return  {
            draggable: self.draggable,
            x: self.x,  
            y: self.y,
            image: self.image  
        }
    }
}

export default EndManager