import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Restaurant } from './entities/restaurant.entity';
import { Menu } from './entities/menu.entity';

@Injectable()
export class AppService {
  private apiUrl = process.env.API_URL;
  // private apiUrl = 'https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api';

  async fetchData<T>(url: string): Promise<T> {
    try {
      const response = await axios.get<T>(url);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data from the API');
    }
  }

  async getRestaurant(restaurantId: string): Promise<Restaurant> {
    return this.fetchData(`${this.apiUrl}/restaurants/${restaurantId}.json`);
  }

  async getShortMenu(restaurantId: string, menuName: string): Promise<Menu> {
    return this.fetchData(
      `${this.apiUrl}/restaurants/${restaurantId}/menus/${menuName}/short.json`,
    );
  }

  async getFullMenu(restaurantId: string, menuName: string): Promise<Menu> {
    return this.fetchData(
      `${this.apiUrl}/restaurants/${restaurantId}/menus/${menuName}/full.json`,
    );
  }
}
