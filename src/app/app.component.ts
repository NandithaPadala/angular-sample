import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

@Component({
  selector: `app-root`,
  templateUrl :  `./app.sec-index.html`,
  styles : `h1 { width: 2000px; font: 12px;color:green;}`
})
export class AppComponent {
  title = 'MyApp';
}
