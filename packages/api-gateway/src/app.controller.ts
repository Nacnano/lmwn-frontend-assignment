import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Restaurant } from './entities/restaurant.entity';
import { Menu } from './entities/menu.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('restaurants/:restaurantId')
  async getRestaurant(
    @Param('restaurantId') restaurantId: string,
  ): Promise<Restaurant> {
    return this.appService.getRestaurant(restaurantId);
  }

  @Get('restaurants/:restaurantId/menus/:menuName/short')
  async getShortMenu(
    @Param('restaurantId') restaurantId: string,
    @Param('menuName') menuName: string,
  ): Promise<Menu> {
    return this.appService.getShortMenu(restaurantId, menuName);
  }

  @Get('restaurants/:restaurantId/menus/:menuName/full')
  async getFullMenu(
    @Param('restaurantId') restaurantId: string,
    @Param('menuName') menuName: string,
  ): Promise<Menu> {
    return this.appService.getFullMenu(restaurantId, menuName);
  }

  @Get('restaurants/:restaurantId/popular')
  async getPopularMenu(
    @Param('restaurantId') restaurantId: string,
  ): Promise<Menu[]> {
    return this.appService.getPopularMenu(restaurantId);
  }
}
