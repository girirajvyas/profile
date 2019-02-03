import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { Skill } from '../models/skills';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];
  chart = [];
  name =[];
  rating = [];
  constructor() { }

  ngOnInit() {
    
  }

  initializeSkillsDetails(){
    this.skills = [{
      "name": "java",
      "rating" : 80
    },
    {
      "name": "Spring",
      "rating" : 90
    }];

    this.skills.forEach(y => {
      this.name.push(y.name)
      this.rating.push(y.rating)
    });
    
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.name,
        datasets: [ 
          {
            data: this.rating,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
