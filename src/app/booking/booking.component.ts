import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;
  constructor(private configService:ConfigService,
    private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomNumber: new FormControl(''),
      roomType: [''],
      amenities: [''],
      price: [''],
      photos: [''],
      checkinTime:[''],
      checkoutTime:[''],
    })
  }
  


}