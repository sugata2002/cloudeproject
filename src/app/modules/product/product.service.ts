import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductService {
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

  getProduct(): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl + "/api/view-product",
      {
        headers: this.headers,
      },
    );
  }

  postProduct(body: string): Observable<any> {
    return this.http.post<any>(
      environment.baseUrl + "/api/add-product",
      body
    );
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl + "/api/delete-customers/" + id,
      {
        headers: this.headers,
        // params: { id: id },
      },
    );
  }

  getCategory(): Observable<any> {
    return this.http.get<any>(
      environment.baseUrl + "/api/view-product-category",
      {
        headers: this.headers,
      },
    );
  }
}