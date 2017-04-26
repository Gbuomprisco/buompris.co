import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagInputDemoApp } from './ng2-tag-input/tag-input-app.component';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { TagInputModule } from 'ng2-tag-input';
import { Ng2SelectModule } from 'ng2-material-select';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';
import { HttpModule } from '@angular/http';
import { Ng2MaterialDropdownDemoApp } from './ng2-material-dropdown/ng2-material-dropdown.component';
import { DemoComponent } from './demo.component';
import { Ng2MaterialSelectDemoApp } from './ng2-material-select/ng2-material-select.component';
import { Ng2ExpansionPanelsDemoApp } from './ng2-expansion-panels/ng2-expansion-panels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [
    DemoComponent,
    TagInputDemoApp,
    Ng2MaterialDropdownDemoApp,
    Ng2MaterialSelectDemoApp,
    Ng2ExpansionPanelsDemoApp
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,

        Ng2SelectModule,
        TagInputModule,
        Ng2DropdownModule,
        ExpansionPanelsModule
    ],
    declarations: COMPONENTS,
    bootstrap: [DemoComponent],
    exports: COMPONENTS
})
export class AppModule {

}
platformBrowserDynamic().bootstrapModule(AppModule);
