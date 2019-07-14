import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '9cd62e3f553d43b377db986016afc94d';
    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
