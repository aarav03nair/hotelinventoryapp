import { AfterViewInit, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { localStorageToken } from './localstorage.token';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // this.router.events.subscribe((event)=>{
    //   console.log(event);
    // })
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => console.log('NavigationStarted'));
      this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => console.log('NavigationEnd'));
    console.log((this.name.nativeElement.innerText = 'Hilton Hotel'));
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.noOfRooms = 50;
  // }

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private configService: ConfigService,
    private router:Router
  ) {}

  title = 'hotelinventoryapp';
  role = 'Admin';
}
