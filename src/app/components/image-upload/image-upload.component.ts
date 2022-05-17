import {Component, Input} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
import {ImageService} from "../../services/image.service";
import {SaveImageRequest} from "../../models/save-image";
import {EntityTypes} from "../../models/enums/EntityTypes";



@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent{
  @Input() image!:string

  constructor(private imageService: ImageService) {
  }
  color: ThemePalette = 'primary';
  accept!: string;
  fileControl: FormControl = new FormControl(null, Validators.required);

  public savePhoto(): void {
    let imageRequest = new SaveImageRequest(1, EntityTypes.DISH);
    this.imageService.uploadImage(this.fileControl.value, imageRequest).
    subscribe();
  }
  public uploadPhoto(): void {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileControl.value);
    reader.onload = () => {
      this.image = <string>reader.result;
    };
  }
}
