import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Launch {
  mission_name: string;
  launch_year: string;
  details: string;
  mission_patch_small: string;
}

@Component({
  selector: 'app-missionlist',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  filterYear: string = '';
  dataLoaded: boolean = false; 

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchLaunches();
  }

  fetchLaunches() {
    this.http.get<Launch[]>('https://api.spacexdata.com/v3/launches')
      .subscribe(
        data => {
          this.launches = data;
          this.filteredLaunches = [...this.launches];
          this.dataLoaded = true; // Set flag to true once data is loaded
          console.log("test");
        },
        error => {
          console.error('Failed to fetch launches:', error);
          this.dataLoaded = true; // Set flag to true even if there's an error
        }
      );
  }

  filterByYear() {
    if (this.filterYear.trim() === '') {
      this.filteredLaunches = [...this.launches];
    } else {
      this.filteredLaunches = this.launches.filter(launch => launch.launch_year === this.filterYear);
    }
  }

  goToMissionDetails(flightNumber: number) {
    this.router.navigate(['/missiondetails', flightNumber]);
  }
}
