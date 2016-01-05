//

import animalContent from './animal-content'

var Animal = class {
    sayHi() {
        return animalContent();
    }

    sayOther() {
        return 'WAT?!';
    }

    static getName() {
        return 'Animal';
    }
}

export {Animal};
