import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly apiService: AppService) {}

  @Get('restaurants/:restaurantId')
  async getRestaurant(@Param('restaurantId') restaurantId: string) {
    return this.apiService.getRestaurant(restaurantId);
  }

  @Get('restaurants/:restaurantId/menus/:menuName/short')
  async getShortMenu(
    @Param('restaurantId') restaurantId: string,
    @Param('menuName') menuName: string,
  ) {
    return this.apiService.getShortMenu(restaurantId, menuName);
  }

  @Get('restaurants/:restaurantId/menus/:menuName/full')
  async getFullMenu(
    @Param('restaurantId') restaurantId: string,
    @Param('menuName') menuName: string,
  ) {
    return this.apiService.getFullMenu(restaurantId, menuName);
  }
}
