import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    // 9cd62e3f553d43b377db986016afc94d
    // 0ed92a3fd2687e8cfaff6b449bcca923
    const key = '0ed92a3fd2687e8cfaff6b449bcca923';
    try {
      const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
