import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { State } from '../_model/State';
import { StateService } from '../_services/index';


@Component({
  selector: 'app-state-dropdown',
  templateUrl: './state-dropdown.component.html',
  styleUrls: ['./state-dropdown.component.css']
})
export class StateDropdownComponent implements OnInit {
	@Input()selectedValueForState: number;
	@Output() notify: EventEmitter<string> = new EventEmitter<string>();

	state_id: any;
	states: any;
	
	constructor(
		private StateService: StateService
	) {	}

	ngOnInit() {
		this.listState();
	}

	listState() {
		this.StateService.getState().subscribe(data => this.states = data);
	}

	onChange(state): void {
		console.log("state emit");
		console.log(state);
		// this.selectedValueForState = state;
		this.notify.emit(state);
	}
}