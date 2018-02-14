import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng2-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class AlertComponent {
    @Input('msg') msg: string = 'Test';
    @Output('confirmed') confirmed = new EventEmitter();

    userChoice(choice: boolean) {
        this.confirmed.emit(choice);
    }
}