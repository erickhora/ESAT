import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProjectsService {

  constructor(private http: HttpClient) {}

  postProject(nome: string, descricao: string, limite: number, tabelaItens: string) {
    const projectData: Project = { nome, descricao, limite, tabelaItens};

    this.http.post<{ name: string }>('https://esat-4daec.firebaseio.com/projetos.json', projectData)
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }

  getProjects() {
    return this.http.get<{ [key: string]: Project }>('https://esat-4daec.firebaseio.com/projetos.json')
      .pipe(
        map(responseData => {
          const projectArray: Project[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              projectArray.push({...responseData[key], id: key});
            }
          }
          return projectArray;
        })
      );
  }
}
