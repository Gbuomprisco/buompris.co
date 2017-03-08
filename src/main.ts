import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagInputApp } from './ng2-tag-input/tag-input-app.component';
import { TagInputModule } from 'ng2-tag-input';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TagInputModule
    ],
    declarations: [ TagInputApp ],
    bootstrap: [ TagInputApp ],
    entryComponents: [  ]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
