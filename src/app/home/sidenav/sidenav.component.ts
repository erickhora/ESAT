import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  criado = true;
  isCollapsed = true;
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getDados();
  }

  private getDados() {
    this.projectsService.getProjects().subscribe( projects => {
      this.projects = projects;
    });
    this.criado = true;
  }
}
