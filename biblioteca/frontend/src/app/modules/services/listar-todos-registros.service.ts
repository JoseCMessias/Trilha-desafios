import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IListraTodosRegistros } from '../interfaces/IListra-Todos-Registros.interfaces';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListarTodosRegistrosService {
  baseUrl = "http://localhost:3000";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackbar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  read(): Observable<IListraTodosRegistros[]> {
    return this.http.get<IListraTodosRegistros[]>(this.baseUrl);
  }
}
