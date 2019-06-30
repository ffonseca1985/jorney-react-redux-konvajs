
import Konva from 'konva'
import ShapeBase from '../../core/shape/shapeBase'
import eventEmitter from './events/eventEmiter'
import { openPropertiesForm } from './actions/propertiesFormAction'
import { getDispatch } from '../../../shared/state'

class validadorManager extends ShapeBase{
   
    create(text){
        
        var instance = super.create(Konva.Image, this.createConfiguration(), text)
        this.load(text, instance, eventEmitter)
        return instance
    }

    loadProperties(){
        var dispatch = getDispatch()
        dispatch(openPropertiesForm())
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

export default validadorManager