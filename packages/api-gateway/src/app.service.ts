import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  private apiUrl =
    'https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api';

  async fetchData(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data from the API');
    }
  }

  async getRestaurant(restaurantId: string) {
    return this.fetchData(`${this.apiUrl}/restaurants/${restaurantId}.json`);
  }

  async getShortMenu(restaurantId: string, menuName: string) {
    return this.fetchData(
      `${this.apiUrl}/restaurants/${restaurantId}/menus/${menuName}/short.json`,
    );
  }

  async getFullMenu(restaurantId: string, menuName: string) {
    return this.fetchData(
      `${this.apiUrl}/restaurants/${restaurantId}/menus/${menuName}/full.json`,
    );
  }
}
