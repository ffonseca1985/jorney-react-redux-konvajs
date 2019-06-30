
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStage } from './actions/stageAction'
import { Stage } from 'react-konva';
import LayerWithZoom from '../layer/layerWithZoom'
import ModalContainer from '../../community/stage/containers/modalContainer'
import { openFormContext } from '../context/actions/contextAction'

class StageComponent extends Component {

    componentDidMount(evt) {
        const { init } = this.props
        init(this.stage);
    }

    render() {

        return (
            <section>
                <ModalContainer></ModalContainer>
                <Stage className="jorney-konva-border" width={0.78 * window.innerWidth}
                    height={0.7 * window.innerHeight}
                    ref={node => this.stage = node}>
                    <LayerWithZoom></LayerWithZoom>
                </Stage>
            </section>
        )
    }
}

// const mapStateToProps = function(state, props){
//     return {
//            stages: state 
//     }
// }

const mapDispatchToAction = function (dispatch, state) {

    return {
        init: (stage) => {
            dispatch(createStage(stage))
            dispatch(openFormContext());
        }
    }
}

export default connect(null, mapDispatchToAction)(StageComponent)