import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile.model';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
  providers: [ProfileService]
})

export class ProfileListComponent implements OnInit {
  profiles: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  filterByInstrument: string = "All";

  onChange(optionFromMenu) {
    this.filterByInstrument = optionFromMenu;
  }

  constructor(private router: Router, private profileService: ProfileService){}

  ngOnInit(){
    this.profiles = this.profileService.getProfiles();
  }

  goToDetailPage(clickedProfile) {
    this.router.navigate(['profiles', clickedProfile.$key]);
  };

}
