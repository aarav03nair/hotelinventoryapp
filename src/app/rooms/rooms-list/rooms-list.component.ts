import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges ,OnDestroy {
  @Input() rooms: RoomList[]| null = [];

  @Input() title:string = "";
  @Output() selectedRoom  = new EventEmitter<RoomList>();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {}

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room)
  }
  ngOnDestroy(){
    console.log("on destroy is called")
  }
}
