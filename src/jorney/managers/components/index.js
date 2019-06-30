
//Modals Actions
import { openInitModal } from '../../components/community/init/actions/initFormAction'
import { openEndModal } from '../../components/community/end/actions/endAction'
import { openMenuForm } from '../../components/community/menu/actions/menuFormAction'
import { openAtendenteForm } from '../../components/community/atendente/actions/atendenteFormAction'
import { openCaseForm } from '../../components/community/case/actions/caseFormAction'
import { openColetorDigitosForm } from '../../components/community/coletorDigito/actions/coletorDigitosFormAction'
import { openTchauForm } from '../../components/community/tchau/actions/tchauFormAction'
import { openReferenciaForm } from '../../components/community/referencia/actions/referenciaFormAction'

//Constants
import { componentName, componentType } from '../../components/community/constants'

//Managers
import InitManager from '../../components/community/init/initManager'
import EndManager from '../../components/community/end/endManager'
import MenuManager from '../../components/community/menu/menuManager'
import AtendenteManager from '../../components/community/atendente/atendenteManager'
import CaseManager from '../../components/community/case/caseManager'
import ColetorDigitosManager from '../../components/community/coletorDigito/coletorDigitosManager'
import TchauManager from '../../components/community/tchau/tchauManager';
import ReferenciaManager from '../../components/community/referencia/ReferenciaManager';
import validadorManager from '../../components/community/validador/validadorManager';

var getActionByName = (name) => {

    switch (name) {

        case componentName.init:
            return openInitModal
        case componentName.end:
            return openEndModal
        case componentName.menu:
            return openMenuForm
        case componentName.atendente:
            return openAtendenteForm
        case componentName.case:
            return openCaseForm
        case componentName.coletorDigitos:
            return openColetorDigitosForm
        case componentName.tchau:
            return openTchauForm
        case componentName.referencia:
            return openReferenciaForm        
        default:
            return openInitModal
    }
}

var createComponent = function (data) {

    switch (data.componentType) {
        case componentType.init:
            createInit(data.componentName)
            break
        case componentType.end:
            createEnd(data.componentName)
            break
        case componentType.menu:
            createMenu(data.componentName)
            break
        case componentType.atendente:
            createAtendente(data.componentName)
            break
        case componentType.case:
            createCase(data.componentName)
            break
        case componentType.coletorDigitos:
            createColetorDigitos(data.componentName)
            break
        case componentType.tchau:
            createTchau(data.componentName)
            break
        case componentType.referencia:
            createReferencia(data.componentName)
            break    
        case componentType.validador:
            createValidador(data.componentName)
            break        
        default:
            createInit(data.componentName)
            break
    }
}

var createValidador = (componentName) => {

    let image = new Image();
    let validadorComponent = new validadorManager(2);

    validadorComponent.setImage(image)

    image.onload = () => {
        validadorComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/validadores.png')
}

var createReferencia = (componentName) => {

    let image = new Image();
    let referenciaComponent = new ReferenciaManager();

    referenciaComponent.setImage(image)

    image.onload = () => {
        referenciaComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/referencia.png')
}

var createTchau = (componentName) => {

    let image = new Image();
    let tchauComponent = new TchauManager();

    tchauComponent.setImage(image)

    image.onload = () => {
        tchauComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/tchau.png')
}
  
var createColetorDigitos = (componentName) => {

    let image = new Image();
    let coletorDigitosComponent = new ColetorDigitosManager(2);

    coletorDigitosComponent.setImage(image)

    image.onload = () => {
        coletorDigitosComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/coletorDigito.png')
}

var createCase = (componentName) => {

    let image = new Image();
    let caseComponent = new CaseManager(2);

    caseComponent.setImage(image)

    image.onload = () => {
        caseComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/case.png')
}

var createAtendente = (componentName) => {

    let image = new Image();
    let atendenteComponent = new AtendenteManager();

    atendenteComponent.setImage(image)

    image.onload = () => {
        atendenteComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/atendente.png')
}

var createInit = (componentName) => {

    let image = new Image();
    let initComponent = new InitManager();

    initComponent.setImage(image)

    image.onload = () => {
        initComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/init.png')
}

var createEnd = (componentName) => {

    let image = new Image();
    let endComponent = new EndManager();

    endComponent.setImage(image)

    image.onload = () => {
        endComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/end.png')
}

var createMenu = (componentName) => {

    let image = new Image();
    let menuComponent = new MenuManager(2);

    menuComponent.setImage(image)

    image.onload = () => {
        menuComponent.create(componentName)
    }

    image.src = require('../../../assets/img/components/menu.png')
}

export { getActionByName, createComponent }