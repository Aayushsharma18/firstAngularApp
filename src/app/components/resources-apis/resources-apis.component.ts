import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resources-apis',
  imports: [],
  templateUrl: './resources-apis.component.html',
  styleUrl: './resources-apis.component.css'
})
export class ResourcesApisComponent {

  userList = resource({
    loader: async () => {
      return await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json() as Promise<any[]>)
    }
  });

  reload() {
    this.userList.reload();
  }
}
