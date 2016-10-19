import { Component } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container text-center">
    <h1>Record Store</h1>
  <album-list
  [childAlbumList]="masterAlbumList"
  (clickSender)="showDetails($event)"
  ></album-list>
  </div>
  `
})

export class AppComponent {
  public masterAlbumList: Album[] = [
    new Album("The Jimi Hendrix Experience", "Jimi Hendrix", "Rock", 12),
    new Album("Electric LadyLand", "Jimi Hendrix", "Rock", 10),
    new Album("Songs by Sam Cooke", "Sam Cooke", "Soul", 10),
    new Album("Encore", "Sam Cooke", "Soul", 8),
    new Album("Sweet Baby James", "James Taylor", "Folk", 12),
    new Album("Walking Man", "James Taylor", "Folk", 10),
    new Album("James Taylor Live", "James Taylor", "Rock", 20)
  ];
  selectedAlbum: Album = null;
  showDetails(clickedAlbum: Album) {
    this.selectedAlbum = clickedAlbum;
  }
}
