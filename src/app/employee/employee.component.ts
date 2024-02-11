import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(@Self() private roomService: RoomsService){

  }
}
