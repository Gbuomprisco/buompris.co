import { Component } from '@angular/core';

@Component({
    selector: 'ng2-material-select-demo',
    templateUrl: './ng2-material-select.template.html',
    styles: [
        `.section {
          margin: 1em 0;
          padding: 1em 0;
        }`
    ]
})

export class Ng2MaterialSelectDemoApp {
    public framework1 = {
        value: 'Angular 2',
        label: 'ng2',
        id: 0
    };

    public language;
    public framework;

    public frameworksList = [ 'EmberJS', 'React', 'Vue', 'Angular2',
        'EmberJS', 'React', 'Vue', 'Angular2', 'EmberJS', 'React', 'EmberJS', 'React' ];

    public frameworks = [
        {
            value: 'Angular 2',
            label: 'ng2',
            id: 0
        },
        {
            value: 'React',
            label: 'rx',
            id: 1
        },
        {
            value: 'Ember',
            label: 'EmberJS',
            id: 2
        },
        {
            value: 'Redux',
            label: 'Redux',
            id: 3
        }
    ];

    public languages = [
        {value: 'Typescript', id: 0},
        {value: 'Javascript', id: 1}
    ];

    public multipleValuesModel = [
        {value: 'Typescript', id: 0},
        {value: 'Javascript', id: 1}
    ];

    public myModel = [];
}
