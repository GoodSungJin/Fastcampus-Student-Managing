import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css'],
})
export class HomeworkComponent implements OnInit {
  showSide = false;
  constructor(private studentsService: StudentsService) {}

  ngOnInit() {}

  showSidebar(state: boolean) {
    this.showSide = state;
  }
}