

const actionTypeConstant = {
    
    create_stage: 'create_stage',
    create_layer: 'create_layer_stage',
    save_stage: 'save_stage',
    add_layer: 'add_layer_stage',
    add_shape: 'add_shape_stage',
    draw_shape: 'draw_shape_stage',
    listenningOn: 'listenning-on-stage',
    listenningOff: 'listenning-off-stage',
    addScala: 'add-scala',
    removeScala: 'remove-scala' 
}

const actionHistoryVersionTypeConstant = {
    save_version: 'save_version',
    get_all_version: 'get_all_version'
}

export {actionTypeConstant, actionHistoryVersionTypeConstant}