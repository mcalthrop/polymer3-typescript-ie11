import { kebabCase } from 'lodash';
import { MyApp } from './app';
import { MyTopBar } from './top-bar';


// add custom elements here
const elements = {
    MyApp,
    MyTopBar,
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key])
    });
