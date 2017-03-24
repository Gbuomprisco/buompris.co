import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'ng2-tag-input-demo',
    styleUrls: ['./tag-input-app.style.scss', './_custom-theme.scss'],
    templateUrl: './tag-input-app.template.html'
})
export class TagInputDemoApp {
    constructor(private http: Http) {}

    public autocompleteItems: string[] = [
        'Typescript',
        'Ruby',
        'Java',
        'Scala',
    ];

    public transform(item: string): string {
        return `@${item}`;
    }

    public requestAutocompleteItems = (text: string): Observable<any> => {
        const url = `https://api.github.com/search/repositories?q=${text}`;
        return this.http
            .get(url)
            .map(data => data.json().items.map(item => item.full_name));
    };

    public startsWithAt(control: FormControl) {
        if (control.value.charAt(0) !== '@') {
            return {
                'startsWithAt@': true
            };
        }

        return null;
    }

    public endsWith$(control: FormControl) {
        if (control.value.charAt(control.value.length - 1) !== '$') {
            return {
                'endsWith$': true
            };
        }

        return null;
    }

    public validators = [this.startsWithAt, this.endsWith$];

    public errorMessages = {
        'startsWithAt@': 'Your items need to start with \'@\'',
        'endsWith$': 'Your items need to end with \'$\''
    };
}
