import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: "https://pmcvariety.files.wordpress.com/2018/11/rev-1-fb2-00589r_high_res_jpeg.jpg?w=1000&h=563&crop=1",
      description: "Fantastic Beasts"
    },
    {
      url: "https://hermandadblanca.org/wp-content/uploads/2019/09/hipogrifo-hipogrifo-un-ser-mitol%C3%B3gico.-I211579.jpg",
      description: "Hipogrifo"
    }
  ];
}