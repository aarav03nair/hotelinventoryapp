import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {Room, RoomList} from './rooms'
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit,AfterViewInit {
  hotelName = 'Hiltom Hotel';
  noOfRooms=10;
  hideRooms=true;
  //*ngif directive
  rooms : Room = {
    totalRooms:50,
    availableRooms:10,
    bookedRooms: 5
  };
  title = 'Room lIst'
//*ngif directive end of demoonstration

  roomList : RoomList[] =[]

  stream = new Observable(observer =>{
    observer.next('user1')
    observer.next('user2')
    observer.next('user3')
    observer.next('user4')
    observer.complete()
    // observer.error('error')
  })
  @ViewChild(HeaderComponent, {static:true})headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) HeaderChildrenComponent!: QueryList<HeaderComponent>; //bydefault static:false
  rooms$  = this.roomsService.getRooms$.pipe(
    catchError((err)=>{console.log(err);
    return of([])})
  );
  roomCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) =>rooms.length)
  )
  // roomService = new RoomsService();
ngOnInit() : void{ 

  this.roomsService.getPhotos().subscribe((event)=>{
    switch(event.type){
      case HttpEventType.Sent:
      {
        console.log("request made");
        break;
      }   
      case HttpEventType.ResponseHeader:
      {
        console.log("request success");
        break;
      } 
    }
  });


  this.stream.subscribe({
    next: (value)=>console.log(value),
    complete:()=>console.log('complete'),
    error: (err)=>console.log(err)
  });

  //console.log(this.headerComponent);
  // console.log(this.roomsService.getRooms());
  //  this.roomsService.getRooms$.subscribe(rooms=>{
  //   this.roomList = rooms;
  // })
};

subscription!: Subscription;
constructor(private roomsService:RoomsService,
  private configService:ConfigService){

}
  ngAfterViewInit(): void {
    this.headerComponent.title="Room View";
    this.HeaderChildrenComponent.last.title="Late title";
  }

  toggle(){
    this.hideRooms=!this.hideRooms;
    this.title="Rooms List";
    
  }

  selectRoom(room:RoomList){
    console.log(room)
  }
  addRoom(){
    const room:RoomList = {
      // roomNumber:'4',
      roomType:'Double Room',
      amenities:'free wifi, Bahroom, Kitchen',
      price:5000,
      photos: 'https://unsplash.com/photos/a-gray-cat-sitting-inside-of-a-blue-container-caufkpSLh6E',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime:new Date('28-Nov-2023')
    };
    //this.roomList.push(room);
    // this.roomList=[...this.roomList,room]
    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList = data;
    })
  }
  editRoom(){
    const room:RoomList = {
      roomNumber:'3',
      roomType:'edited Room',
      amenities:'free wifi, Bahroom, Kitchen',
      price:5000,
      photos: 'https://unsplash.com/photos/a-gray-cat-sitting-inside-of-a-blue-container-caufkpSLh6E',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime:new Date('28-Nov-2023')
    };
    this.roomsService.editRoom(room).subscribe((data)=>{
      this.roomList = data;
    });
  }


  deleteRoom(){
    this.roomsService.delete('3').subscribe((data)=>{
      this.roomList=data;
    })
  }
 
}
