import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IndexService {

  constructor(private http: HttpClient) { }

}
