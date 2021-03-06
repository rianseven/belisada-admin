import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEventRoutingModule } from './manage-event-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { ManageEventComponent } from './manage-event-component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../../@theme/theme.module';
import { AddEventComponent } from './add-event/add-event.component';
import { MyDatePickerModule } from 'mydatepicker';
import { NbDatepickerModule } from '@nebular/theme';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FieldErrorComponent } from './field-error/field-error.component';

const COMPONENTS = [
    FieldErrorComponent
];
@NgModule({
    imports: [
        CommonModule,
        ManageEventRoutingModule,
        FormsModule,
        ThemeModule,
        ReactiveFormsModule,
        MyDatePickerModule,
        NbDatepickerModule,
        OwlDateTimeModule, 
        OwlNativeDateTimeModule,
        // DropdownButtonsComponent
    ],
    exports: [...COMPONENTS],
    declarations: [ManageEventComponent, EventListComponent, AddEventComponent, ...COMPONENTS]
})
export class ManageEventModule { }
