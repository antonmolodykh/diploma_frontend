import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RequestsService {

  @Output() profileChange: EventEmitter<any> = new EventEmitter()

  private serverUrl = "http://127.0.0.1:8000/api/";

  constructor(private http: Http) { }

  private sendPostRequest(api: string, params: any = undefined): Promise<any> {
    let request = this.serverUrl + api + "/";

    let input = new FormData();

    if (params) {
        for (let key in params) {
            if (params[key] != undefined) {
                input.append(key, params[key]);
            }
        }
    }

    // Отправляем запрос на сервер
    return this.http.post(request, input, { withCredentials: true })
    .map((response: Response) => response.json())
    .toPromise()
    .then(response => {
        if (response.errors)
            throw response.errors;
        return response
    });
  }

  private sendGetRequest(api: string, params: any = undefined): Promise<any> {
    let request = this.serverUrl + api + "/";

    let input = new FormData();

    if (params) {
        for (let key in params) {
            if (params[key] != undefined) {
                input.append(key, params[key]);
            }
        }
    }
    // Отправляем запрос на сервер
    return this.http.get(request, { withCredentials: true })
    .map((response: Response) => response.json())
    .toPromise()
    .then(response => {
        if (response.errors)
            throw response.errors;
        return response
    });
  }



  public accountRegister(email: string, password: string, access_token: string) {
  	return this.sendPostRequest("account/register", {
  		"email": email,
  		"password": password,
  		"access_token": access_token
  	});

  }

  public accountLogin(email: string, password: string) {
    return this.sendPostRequest("account/login", {
  		"email": email,
  		"password": password
  	}).then(response => {
        this.profileChange.emit(response)
        return 'sucess';
      });
  }

  public accountLogout() {
    return this.sendPostRequest("account/logout");
  }

  public accountMy() {
  	return this.sendGetRequest("account/my")
    .then(response => {
      this.profileChange.emit(response)
      return response;
    });
  }

  public statisticsSummary() {
  	return this.sendGetRequest("statistics/report");
  }

  public statistics(count: number = undefined) {
  	return this.sendPostRequest("statistics/statistics", {
            "count": count
      });
  }
}
