import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public location: String = "Ukraine, Kyiv";
  public title: String = "E-menu";
  public email: String = "testmail@mail.com";
  public phone: String = "+38 (044) 256 99 91";

  constructor() {
  }

  ngOnInit(): void {
  }

}
