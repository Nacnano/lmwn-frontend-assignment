import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('App Controller', () => {
    it('getRestaurant', async () => {
      const mockRestaurant = {
        name: 'Ekkamai Macchiato - Home Brewer',
        id: '227018',
        coverImage:
          'https://img.wongnai.com/p/1920x0/2021/03/09/fc6f2b50e313418590eb113cbc4981c2.jpg',
        menus: [
          'Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว',
          'Promotion B กะเพราหมูสับ ไข่ดาว',
          'Promotion C กะเพราเนื้อสับ ไข่ดาว',
          'Promotion D ข้าวหมูกระเทียมไข่ดาว',
          'Set A กะเพราหมูสับไข่ดาว + กาแฟ',
          'Set B หมูกระเทียมไข่ดาว + กาแฟ',
          'Set C หมูสามชั้นคั่วพริกกระเทียม ไข่ดาว + กาแฟ',
          'Set D หมูผัดไข่ + กาแฟ',
          'Set E กะเพราเนื้อสับไข่ดาว + กาแฟ',
          'Set H ข้าวผัดปู + กาแฟ',
          'Set J ข้าวไข่ขยี้ปู + กาแฟ',
          'Set K ข้าวคอหมูทอดน้ำปลา + กาแฟ',
          'Set M หมูกรอบผัดพริก ไข่ออนเซ็น + เครื่องดื่ม',
          'Set N สามชั้นคั่วพริกกระเทียม ไข่ดาว + Choux Cream',
          'Set O กะเพราหมูสับไข่ดาว + Choux Cream',
          'Set P Choux Cream + เครื่องดื่ม',
          'Duo A กะเพราหมูสับไข่ดาว + หมูกระเทียมไข่ดาว',
          'Duo B หมูสามชั้นคั่วพริกกระเทียมไข่ดาว + กะเพราหมูสับไข่ดาว',
          'Duo D หมูสามชั้นคั่วพริกกระเทียม 2 จาน',
          'อะไรก็ได้ ง่ายๆ',
          'Iced Caffe Latte',
          'Iced Americano',
          'Iced Caramel Macchiato',
          'Iced Caffe Mocha',
          'Hot Caffe Latte',
          'Hot Americano',
          'Hot Caramel Macchiato',
          'Hot Caffe Mocha',
          'Hot Cappuccino',
          'Piccolo Latte',
          'Dirty',
          'Cold Brew Botton',
          'Drip Colombia El Paraiso Sakura',
          'Drip Ethiopia Guji',
          'Amber Hive',
          'Guilty Pleasure',
          'Chai',
          'Espresso x Orange',
          'Miyazaki',
          'Honey Bee',
          'Rest in Peach',
          'Coffee Jelly',
          'Frozen Lemonade Espresso',
          'Lychee and Rose Tea',
          'Peach Tea',
          'Oriental',
          'Yuzu Soda ยูสุ โซดา',
          'Yuzu Float',
          'Orange Tonic',
          'Yuzu Fizz',
          'Thai Milk Tea Float',
          'Thai Milk Tea',
          'Orange Juice',
          'Heartbeat',
          'Bunny',
          'Water',
          'Sparkling',
          'นมร้อน',
          'Iced Lemonade',
          'Hot Chocolate',
          'Iced Chocolate',
          'Iced Matcha Latte',
          'Hot Matcha Latte',
          'กะเพราหมูสับ Pork with Holy Basil',
          'กะเพราหมูตุ๋น Stewed Pork with Holy Basil',
          'หมูกระเทียม Pork with Garlic',
          'หมูสับพริกแห้งโหระพา Spicy Pork with Sweet Basil',
          'หมูกรอบผัดพริก Spicy Crispy Pork',
          'หมูกรอบหม่าล่า Spicy Crispy Pork with Mala',
          'หมูกรอบคั่วไข่ Crispy Pork with Egg',
          'ข้าวผัดหมูกรอบ Spicy Fried Rice with Crispy Pork',
          'หมูมิโสะ Miso Pork',
          'แกงกะหรี่หมู Pork Curry',
          'Green Pork Curry แกงเขียวหวานหมู',
          'ซี่โครงหมูน้ำผึ้ง Honey Ribs',
          'ข้าวผัดเบคอน Fried Rice with Bacon',
          'สุกี้แห้งหมู Thai Style Pork Sukuyaki',
          'คอหมูทอดน้ำปลา Deep Fried Pork Jowl',
          'หมูสามชั้นคั่วพริกกระเทียม Spicy Pork Belly',
          'Egg',
          'ข้าว',
          'กะเพราเนื้อสับ Beef with Holy Basil',
          'กะเพราเนื้อตุ๋น Stewed Beef with Holy Basil',
          'เนื้อกระเทียม Beef with Garlic',
          'เนื้อพริกแห้ง โหระพา Spicy Beef with Sweet Basil',
          'ริบอายเผ็ด Spicy Rib Eye Rice Bowl',
          'เนื้อสันนอกย่าง Pan Seared Striploin',
          'ข้าวผัดมันเนื้อ Spicy Fried Rice with Beef Fat',
          'เนื้อมิโสะ Miso Beef',
          'แกงกะหรี่เนื้อ Beef Curry',
          'สุกี้แห้งเนื้อ',
          'สตูว์เนื้อ Beef Stewed',
          'กุ้งกระเทียม Shrimp with Garlic',
          'กุ้งกะเพรา Shrimp with Holy Basil',
          'กุ้งคั่วพริกกระเทียม Spicy Shrimp',
          'กุ้งซอสโหระพา Shrimp with Sweet Basil Sauce',
          'ปูผัดพริก Spicy Crab Meat',
          'ข้าวผัดปู Fried Rice with Crab Meat',
          'ปูผัดพริกเหลือง Crab Meat with Yellow Chili',
          'ปูไข่ขยี้ Crab Meat with Egg',
          'ข้าวแซลม่อนทอดน้ำปลา Deep Fried Salmon with Fish Sauce',
          'ข้าวแซลม่อนคั่วพริกกระเทียม Spicy Salmon',
          'ข้าวแซลมอนเทอริยากิ Salmon Teriyaki',
          'ข้าวแซลม่อนซอสโหระพา Salmon with Sweet Basil Sauce',
          'สปาเก็ตตี้เบคอนพริกแห้ง Garlic and Bacon Spaghetti',
          'สปาเก็ตตี้ซอสมะเขือเทศเบคอน Tomato Bacon Spaghetti',
          'สปาเก็ตตี้กุ้งคั่วพริกกระเทียม Spicy Shrimp Spaghetti',
          'สปาเก็ตตี้กุ้งซอสมะเขือเทศพริกแห้ง Tomato Shrimp Spaghetti',
          'สปาเก็ตตี้กุ้งซอสโหระพา Shrimp Sweet Basil Spaghetti',
          'สปาเก็ตตี้ปูคั่วพริกกระเทียม Spicy Crab Meat Spaghetti',
          'สปาเก็ตตี้ปูซอสโหระพา Crab Meat with Sweet Basil Spaghetti',
          'สปาเก็ตตี้แซลมอนซอสโหระพา Salmon Sweet Basil Spaghetti',
          'กะเพราเห็ด Shimeji Holy Basil',
          'เต้าหู้ เห็ด กระเทียม Tofu Shimeji Garlic',
          'เต้าหู้เห็ด ซอสโหระพา Tofu Shimeji Sweet Basil',
          'เต้าหู้ เห็ด คั่วพริกกระเทียม Spicy Shimeji',
          'เต้าหู้ เห็ด พริกแห้งโหระพา Tofu Shimeji Sweet Basil',
          'สปาเก็ตตี้เห็ด ซอสมะเขือเทศ Tomato Shimeji Spaghetti',
          'สปาเก็ตตี้เห็ด ซอสโหระพา Shimeji Sweet Basil Spaghetti',
          'สุกี้แห้ง เต้าหู้ เห็ด Tofu Shimeji Sukiyaki',
          'Peach Vodka Soju Ice Cream',
          'Ice Cream Chocolate Caramel',
          'Chocolate cookie',
          'Lotus Biscoff',
          'Choux Cream',
          'Blueberry Cheese Pie',
          'Coconut Cake Box',
          'BANOFFEE box',
          'Baileys Irish Cream Tiramisu',
          'Banana Cake',
          'Toffee cake delivery ( อุ่น 20 วินาที )',
          'Mixed Berry Cheese Pie',
          'Shine Muscat Cheese Pie',
          'Carrot Cake',
          'Salted Caramel Chocolate Tart',
          'Basque Cheese Cake',
          'Dark Beer Chocolate Cake',
          'Caramel Macadamia Cake',
          'Ice Cream Thai Tea',
          'Honey Lemon Cake',
          'Nutella Cake',
          'Strawberry Custard cake',
          'Yuzu Cake',
          'Strawberry Cheese Pie',
          'Black Forest box',
          'Peach and Blueberry Crumble Cheesecake',
          'Bailey’s Strawberry Shortcake',
          'Durian Cheese Pie',
          'Coconut Cake',
          'Durian Cheese Cake',
          'Coconut Mini Box',
          'Japanese Sweet Potato Choux Cream',
          'Banoffe Cake',
          'Black Forest Cake',
          'Blueberry Cheese Cake',
          'Croissant',
          'Caramel Custard Cake',
          'Chocolate Caramel Pistachio and Almond Cake',
          'Chocolate Cherry',
          'Chocolate Mixed Berries',
          'Fig and Almond Tart',
          'Japanese Pumpkin Cheesecake',
          'Japanese Sweet Potato Cheese Cake',
          'Lychee and Rose Cake',
          'Mango Cheese Cake',
          'Matcha Cheese Cake',
          'Matcha and Japanese Sweet Potato',
          'Muscat Almond Tart',
          'Peach and Strawberry Cheese cake',
          'Strawberry Fresh cream cake',
          'Strawberry cheese cake 🍓',
          'Sweet Potato and pumpkin cheesecake',
          'White Chocolate Raspberry Tart',
          'Cheese Cake with Caramel Macadamia',
          'Chocolate Mixed Berry Cheese Cake',
          'Barque Durian Cheese Cake',
          'Durian Cheese Cake Box',
          'Marian Plum Cheese Cake',
          'มะยงชิดเค้ก',
          'Durian Cheese cake no bake',
          'Set B ข้าวหมูกระเทียมไข่ดาว + เครื่องดื่ม',
          'Set C ข้าวหมูสามชั้นคั่วพริกกระเทียม + เครื่องดื่ม',
          'Set Dข้าวหมูผัดไข่ + เครื่องดื่ม',
          'Set Eข้าวกะเพราเนื้อสับไข่ดาว + เครื่องดื่ม',
          'Set F ข้าวคอหมูทอดกระเทียม + เครื่องดื่ม',
          'Set G ข้าวหน้าไก่ย่าง + เครื่องดื่ม',
          'Set H ข้าวผัดปู + เครื่องดื่ม',
          'Set L ข้าวหมูสามชั้นย่างซอสโคชูจัง ไข่ออนเซ็น + เครื่องดื่ม',
          'Set M ข้าวหมูกรอบผัดพริก ไข่ออนเซ็น + เครื่องดื่ม',
          'Set N ข้าวหมูสามชั้นคั่วพริกกระเทียม ไข่ดาว + Vanilla Choux Cream',
          'Set O ข้าวกะเพราหมูสับไข่ดาว + Vanilla Choux Cream',
          'Set P Vanilla Choux Cream + เครื่องดื่ม',
          'Set Q ข้าวหมูสามชั้นคั่วพริกกระเทียมไข่ดาว+Japanese Potato Choux Cream',
          'Set S Japanese Potato Choux Cream + เครื่องดื่ม',
          'Duo 1 ข้าวกะเพราหมูสับไข่ดาว + หมูกระเทียมไข่ดาว',
          'Duo 2 ข้าวหมูสามชั้นคั่วพริกกระเทียมไข่ดาว + กะเพราหมูสับไข่ดาว',
          'Duo 3 ข้าวหมูสามชั้นคั่วพริกกระเทียมไข่ดาว + ข้าวหมูผัดไข่',
          'Duo 4 ข้าวหมูสามชั้นคั่วพริกกระเทียมไข่ดาว สองที่',
          'ซื้อ 2 แถม 1 เครื่องดื่ม',
        ],
        activeTimePeriod: { open: '08:00', close: '17:00' },
      };

      const result = await appController.getRestaurant('227018');

      expect(result).toMatchObject(mockRestaurant);
    });
  });

  describe('getFullMenu', () => {
    it('getFullMenu', async () => {
      const mockFullMenu = {
        name: 'Iced Caffe Latte',
        id: 'Iced Caffe Latte',
        thumbnailImage:
          'https://img.wongnai.com/p/100x100/2021/01/29/8ff927160a7e44d6b5c9d9848912452e.jpg',
        discountedPercent: 0,
        sold: 100,
        fullPrice: 110,
        totalInStock: 200,
        options: [
          {
            label: 'Iced Caffe Latte',
            choices: [
              { label: 'Take Awayใส่แก้วกลับบ้าน' },
              { label: 'Non Sweet ไม่หวาน' },
              { label: 'Less Sweet หวานน้อย' },
              { label: 'Extra Sweet เพิ่มหวาน' },
              { label: 'House Blend (Fruity) กาแฟคั่วกลาง' },
              { label: 'Latte Art Blend (Strong) กาแฟคั่วเข้ม' },
              { label: 'After Food รับหลังอาหาร' },
              { label: 'แยกน้ำแข็ง Bottle' },
              { label: 'นมถั่วเหลือง Soy Milk' },
              { label: 'Almond Milk นมอัลมอนด์' },
              { label: 'Full Shot กาแฟเข้ม' },
            ],
          },
        ],
        largeImage:
          'https://img.wongnai.com/p/1920x0/2021/01/29/8ff927160a7e44d6b5c9d9848912452e.jpg',
      };

      const result = await appController.getFullMenu(
        '227018',
        'Iced Caffe Latte',
      );

      expect(result).toEqual(mockFullMenu);
    });
  });

  describe('getShortMenu', () => {
    it('getShortMenu', async () => {
      const mockShortMenu = {
        name: 'Iced Caffe Latte',
        id: 'Iced Caffe Latte',
        thumbnailImage:
          'https://img.wongnai.com/p/100x100/2021/01/29/8ff927160a7e44d6b5c9d9848912452e.jpg',
        discountedPercent: 0,
        fullPrice: 110,
        sold: 100,
        totalInStock: 200,
      };

      const result = await appController.getShortMenu(
        '227018',
        'Iced Caffe Latte',
      );

      expect(result).toEqual(mockShortMenu);
    });
  });

  describe('getPopularMenu', () => {
    it('getPopularMenu', async () => {
      const mockPopularMenu = [
        {
          name: 'Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว',
          id: 'Promotion A หมูสามชั้นคั่วพริกกระเทียมไข่ดาว',
          thumbnailImage:
            'https://img.wongnai.com/p/100x100/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg',
          discountedPercent: 0,
          sold: 100,
          fullPrice: 158,
          totalInStock: 200,
          options: [
            {
              label: 'สามชั้นคั่วพริกกระเทียม',
              choices: [
                { label: 'Take Away ใส่กล่อง' },
                { label: 'ไม่เผ็ด Non Spicy' },
                { label: 'เผ็ดน้อย Less Spicy' },
                { label: 'เผ็ดกลาง Normal Spicy' },
                { label: 'เพิ่มเผ็ด Extra Spicy' },
                { label: 'ไม่ใส่กระเทียม No Garlic' },
                { label: 'ไม่รับข้าว No Rice' },
                { label: 'ข้าวน้อย Less Rice' },
                { label: 'ไม่รับไข่ No Egg' },
                { label: 'ไข่ดาวไม่สุก Sunny Side Up Egg' },
                { label: 'ไข่ดาวสุก Fully Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่ข้น Half Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่เจียว Thai Style Omelette' },
                { label: 'เปลี่ยนเป็นไข่ออนเซ็น Onsen Egg' },
              ],
            },
          ],
          largeImage:
            'https://img.wongnai.com/p/1920x0/2021/07/23/648ea50d691d407eb0cb96efab951b48.jpg',
        },
        {
          name: 'Promotion B กะเพราหมูสับ ไข่ดาว',
          id: 'Promotion B กะเพราหมูสับ ไข่ดาว',
          thumbnailImage:
            'https://img.wongnai.com/p/100x100/2021/07/23/29eacbe29c734379a8390963d3926d25.jpg',
          discountedPercent: 0,
          sold: 100,
          fullPrice: 128,
          totalInStock: 200,
          options: [
            {
              label: 'กะเพราหมูสับไข่ดาว',
              choices: [
                { label: 'ไม่เผ็ด Non Spicy' },
                { label: 'เผ็ดน้อย Less Spicy' },
                { label: 'เผ็ดกลาง Normal Spicy' },
                { label: 'เพิ่มเผ็ด Extra Spicy' },
                { label: 'ไม่ใส่กระเทียม No Garlic' },
                { label: 'ไม่ใส่ใบกะเพรา No Holy Basil' },
                { label: 'ไข่ดาวไม่สุก Sunny Side Up Egg' },
                { label: 'ไข่ดาวสุก Fully Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่ข้น Half Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่เจียว Thai Style Omelette' },
                { label: 'เปลี่ยนเป็นไข่ออนเซ็น Onsen Egg' },
              ],
            },
          ],
          largeImage:
            'https://img.wongnai.com/p/1920x0/2021/07/23/29eacbe29c734379a8390963d3926d25.jpg',
        },
        {
          name: 'Promotion C กะเพราเนื้อสับ ไข่ดาว',
          id: 'Promotion C กะเพราเนื้อสับ ไข่ดาว',
          thumbnailImage:
            'https://img.wongnai.com/p/100x100/2021/07/23/45794e90d05a45c1afae9e752ee49e4a.jpg',
          discountedPercent: 0,
          sold: 100,
          fullPrice: 168,
          totalInStock: 200,
          options: [
            {
              label: 'กะเพราเนื้อสับไข่ดาว',
              choices: [
                { label: 'ไม่เผ็ด Non Spicy' },
                { label: 'เผ็ดน้อย Less Spicy' },
                { label: 'เผ็ดกลาง Normal Spicy' },
                { label: 'เพิ่มเผ็ด Extra Spicy' },
                { label: 'ไม่ใส่กระเทียม No Garlic' },
                { label: 'ไม่ใส่ใบกะเพรา No Holy Basil' },
                { label: 'ไข่ดาวไม่สุก Sunny Side Up Egg' },
                { label: 'ไข่ดาวสุก Fully Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่ข้น Half Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่เจียว Thai Style Omelette' },
                { label: 'เปลี่ยนเป็นไข่ออนเซ็น Onsen Egg' },
              ],
            },
          ],
          largeImage:
            'https://img.wongnai.com/p/1920x0/2021/07/23/45794e90d05a45c1afae9e752ee49e4a.jpg',
        },
        {
          name: 'Promotion D ข้าวหมูกระเทียมไข่ดาว',
          id: 'Promotion D ข้าวหมูกระเทียมไข่ดาว',
          thumbnailImage:
            'https://img.wongnai.com/p/100x100/2021/08/05/0e8439b537244c09a8669849c5fb995e.jpg',
          discountedPercent: 0,
          sold: 100,
          fullPrice: 128,
          totalInStock: 200,
          options: [],
          largeImage:
            'https://img.wongnai.com/p/1920x0/2021/08/05/0e8439b537244c09a8669849c5fb995e.jpg',
        },
        {
          name: 'Set A กะเพราหมูสับไข่ดาว + กาแฟ',
          id: 'Set A กะเพราหมูสับไข่ดาว + กาแฟ',
          thumbnailImage:
            'https://img.wongnai.com/p/100x100/2021/04/16/849fae362cd043e6b68cf6ba55a8457c.jpg',
          discountedPercent: 0,
          sold: 100,
          fullPrice: 208,
          totalInStock: 200,
          options: [
            {
              label: 'กะเพราหมูสับไข่ดาว',
              choices: [
                { label: 'ไม่เผ็ด Non Spicy' },
                { label: 'เผ็ดน้อย Less Spicy' },
                { label: 'เผ็ดกลาง Normal Spicy' },
                { label: 'เพิ่มเผ็ด Extra Spicy' },
                { label: 'ไม่ใส่กระเทียม No Garlic' },
                { label: 'ไม่ใส่ใบกะเพรา No Holy Basil' },
                { label: 'ไข่ดาวไม่สุก Sunny Side Up Egg' },
                { label: 'ไข่ดาวสุก Fully Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่ข้น Half Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่เจียว Thai Style Omelette' },
                { label: 'เปลี่ยนเป็นไข่ออนเซ็น Onsen Egg' },
              ],
            },
            {
              label: 'เครื่องดื่ม',
              choices: [
                { label: 'Iced Americano' },
                { label: 'Iced Caffe Latte' },
                { label: 'Iced Caramel Macchiato' },
                { label: 'Iced Caffe Mocha' },
                { label: 'Caramel Macadamia Macchiato' },
                { label: 'Espresso x Orange' },
                { label: 'Iced Chocolate' },
                { label: 'Iced Lemonade' },
                { label: 'Thai Milk Tea' },
                { label: 'Lychee and Rose Tea' },
                { label: 'Peach Tea' },
                { label: 'ใส่ขวดไม่เอาน้ำแข็ง - Bottle No Ice' },
                { label: 'ใส่แก้วไม่เอาน้ำแข็ง - No Ice' },
              ],
            },
          ],
          largeImage:
            'https://img.wongnai.com/p/1920x0/2021/04/16/849fae362cd043e6b68cf6ba55a8457c.jpg',
        },
        {
          name: 'Set B หมูกระเทียมไข่ดาว + กาแฟ',
          id: 'Set B หมูกระเทียมไข่ดาว + กาแฟ',
          thumbnailImage:
            'https://img.wongnai.com/p/100x100/2021/04/16/ced800c9c2104861abc698d3ac6dffa8.jpg',
          discountedPercent: 0,
          sold: 100,
          fullPrice: 208,
          totalInStock: 200,
          options: [
            {
              label: 'หมูกระเทียมไข่ดาว',
              choices: [
                { label: 'ไม่ใส่กระเทียม No Garlic' },
                { label: 'ใส่พริก Add Chilli' },
                { label: 'ไข่ดาวไม่สุก Sunny Side Up Egg' },
                { label: 'ไข่ดาวสุก Fully Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่ข้น Half Cooked Egg' },
                { label: 'เปลี่ยนเป็นไข่เจียว Thai Style Omelette' },
                { label: 'เปลี่ยนเป็นไข่ออนเซ็น Onsen Egg' },
              ],
            },
            {
              label: 'เครื่องดื่ม',
              choices: [
                { label: 'Iced Americano' },
                { label: 'Iced Caffe Latte' },
                { label: 'Iced Caramel Macchiato' },
                { label: 'Iced Caffe Mocha' },
                { label: 'Caramel Macadamia Macchiato' },
                { label: 'Espresso x Orange' },
                { label: 'Iced Chocolate' },
                { label: 'Iced Lemonade' },
                { label: 'Thai Milk Tea' },
                { label: 'Lychee and Rose Tea' },
                { label: 'Peach Tea' },
                { label: 'ใส่ขวดไม่เอาน้ำแข็ง - Bottle No Ice' },
                { label: 'ใส่แก้วไม่เอาน้ำแข็ง - No Ice' },
              ],
            },
          ],
          largeImage:
            'https://img.wongnai.com/p/1920x0/2021/04/16/ced800c9c2104861abc698d3ac6dffa8.jpg',
        },
      ];

      const result = await appController.getPopularMenu('227018');

      expect(result).toEqual(mockPopularMenu);
    });
  });
});
