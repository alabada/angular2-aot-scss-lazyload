import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChange, ElementRef } from '@angular/core';

@Component({
    selector: 'app-navsearch',
    templateUrl: './navsearch.component.html',
    styleUrls: []
})
export class NavsearchComponent implements OnInit, OnChanges {

    @Input() visible: boolean;
    @Output() onclose = new EventEmitter<boolean>();
    term: string;

    constructor(private elem: ElementRef) { }

    ngOnInit() {
    }

    closeNavSearch() {
        this.visible = false;
        this.onclose.emit();
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        // console.log(changes['visible'].currentValue)
        if (changes['visible'].currentValue === true) {
            this.elem.nativeElement.querySelector('input').focus();
        }
    }

    handleForm() {
        console.log('Form submit: ' + this.term);
    }
}
