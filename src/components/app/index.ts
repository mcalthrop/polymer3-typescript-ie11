import * as shuffle from 'lodash/fp/shuffle';
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';
import * as view from './app.template.html';

export class MyApp extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {
        };
    }

    ready() {
        super.ready();
    }
}