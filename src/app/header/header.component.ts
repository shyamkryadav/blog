import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userDetail=[{name:"shyam",email:"shyamkryadv345@gmail.com",phone:"+9779801622236"}]
  navitems=["Home","Gallery","About","Contact Us"]

}
