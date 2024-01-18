import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Restaurant } from './entities/restaurant.entity';
import { Menu } from './entities/menu.entity';

@Injectable()
export class AppService {
  private apiUrl = process.env.API_URL;

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

  async getPopularMenu(restaurantId: string): Promise<Menu[]> {
    try {
      const restaurant = await this.getRestaurant(restaurantId);

      const menuDetailsPromises = restaurant.menus.map(async (menuName) => {
        return await this.getFullMenu(restaurantId, menuName);
      });

      const menuDetails = await Promise.all(menuDetailsPromises);

      const popularMenus = menuDetails.sort((menuA, menuB) => {
        return menuA.sold - menuB.sold;
      });

      return popularMenus;
    } catch (error) {
      throw new Error('Failed to fetch popular menu data');
    }
  }
}
