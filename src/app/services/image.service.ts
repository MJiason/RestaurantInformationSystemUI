import { Injectable } from '@angular/core';
import {SaveImageRequest} from "../models/save-image";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imgUrl = `${environment.url}/images`;
  constructor(private http: HttpClient) { }

  public uploadImage(image: File, saveImageRequest: SaveImageRequest): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    formData.append(
      'savePhotoDto',
      new Blob([JSON.stringify(saveImageRequest)],
      {type: "application/json"}));
    return this.http.post(this.imgUrl, formData);
  }
}
