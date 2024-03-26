import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  public static dialogResult = true;
  headers: any;

  constructor(private http: HttpClient) {
    // const token = localStorage.getItem(AUTHGWCONSTANTS.bearerToken);
    // const xOriginKey = localStorage.getItem(AUTHGWCONSTANTS.xOriginKey);
    // const xApiKey = localStorage.getItem(AUTHGWCONSTANTS.xApiKey);
    // this.headers = {
    //   Authorization: "Bearer " + token,
    //   "x-Origin-Key": xOriginKey,
    //   "x-Api-Key": xApiKey,
    // };
  }

  getCustomer(): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl + "/api/customers",
      {
        headers: this.headers,
      },
    );
  }

  postCustomer(body: string): Observable<any> {
    console.log("API body ==> ",body);
    return this.http.post<any>(
      environment.baseUrl + "/api/register-customer",
      body
    );
  }

  deleteCustomer(id: any): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl + "/api/delete-customers/" + id,
      {
        headers: this.headers,
        // params: { id: id },
      },
    );
  }
}