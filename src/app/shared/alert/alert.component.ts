import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'ng2-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    animations: [
        trigger('fadeInOut', [
            state('void', style({ opacity: 0 })),
            transition(':enter', [
                animate(150)
            ]),
            transition(':leave', [
                animate(150)
            ])
        ])
    ],
    host: {
      '[@fadeInOut]': 'true'
    }
})

export class AlertComponent {
    @Input() msg = 'Test';
    @Output() confirmed = new EventEmitter();

    userChoice(choice: boolean) {
        this.confirmed.emit(choice);
    }
}
