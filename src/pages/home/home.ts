import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  goalDescription: string[];
  constructor(public navCtrl: NavController) {

  }
  initializeItems() {
    this.goalDescription = [
      'Amsterdam',
      'Bogota',
    ];
  }
  /**
   * @param {any} description
   */
  getGoalDetails(description: any): string[] {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let value: string = description.target.value;

    // if the value is an empty string don't filter the items
    if (value && value.trim() !== '') {
      this.goalDescription = this.goalDescription.filter((description) => {
        return (description.toLowerCase().indexOf(value.toLowerCase()) > -1);
      })
    } else {
      this.goalDescription = [];
    }
    return [];
  }

}
