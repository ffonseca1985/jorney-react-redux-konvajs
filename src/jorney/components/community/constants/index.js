
const componentType = {
    init: '1',
    menu: '2',
    end: '3',
    atendente: '4',
    case: '5', 
    coletorDigitos: '6',
    tchau: '7',
    referencia: '8',
    validador: '9'
}

const componentName = {
    init: 'Inicio',
    menu: 'Menu',
    end: 'Fim',
    atendente: 'Atendente',
    case: 'Case',
    coletorDigitos: 'coletorDigitos',
    tchau: 'tchau',
    referencia: 'referencia',
    validador: 'validador'
}

const components = [
    {
        id: componentType.init,
        name: componentName.init
    },
    {
        id: componentType.menu,
        name: componentName.menu
    },
    {
        id: componentType.end,
        name: componentName.end
    },
    {
        id: componentType.atendente,
        name: componentName.atendente
    },
    {
        id: componentType.case,
        name: componentName.case
    },
    {
        id:componentType.coletorDigitos,
        name: componentName.coletorDigitos
    },
    {
        id:componentType.tchau,
        name: componentName.tchau
    },
    {
        id:componentType.referencia,
        name: componentName.referencia
    },
    {
        id:componentType.validador,
        name: componentName.validador
    }
]

export {componentType,  componentName, components}