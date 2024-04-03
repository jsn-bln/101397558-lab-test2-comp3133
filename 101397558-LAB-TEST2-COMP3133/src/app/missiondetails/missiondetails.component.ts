import { Component, Input, OnInit } from '@angular/core';

interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  details: string;
  mission_patch_small: string;
}

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  @Input() launch: Launch | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
