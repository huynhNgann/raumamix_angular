import { Injectable } from '@angular/core';
import { Banner } from 'src/app/shared/models/banner';
import { Category } from 'src/app/shared/models/category';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllCategory():Category[]{
    return[
      {
        id:1,
        name:'Menu Rau Má Mix'
      },
      {
        id:2,
        name:'Topping'
      },
      {
        id:3,
        name:'Combo Rau Má Mix'
      },
      { 
        id:4,
        name:'Bánh Tráng Mix'
      }
    ]
  }
  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id == id)!;
  }

  getBanner():Banner[]{
    return[
      { imageUrl:'assets/images/BANNER-1-1024x512.jpg',
        name:'Banner 1'
       },
       { imageUrl:'assets/images/BANNER-2-1024x512.jpg',
       name:'Banner 2'
      },
      { imageUrl:'assets/images/BANNER-3-1024x512.jpg',
      name:'Banner 3'
      },
    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 30000,
        name: 'Rau má Mix Kem sữa Nấm Tuyết',
        imageUrl: '/assets/images/mix-kem-sua-nam-tuyet.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 2,
        price: 30000,
        name: 'Rau má Mix Kem sữa Hạnh Nhân',
        imageUrl: '/assets/images/kem-sua-hanh-nhan.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 3,
        price: 28000,
        name: 'Rau má đậu xanh mix Macchiato',
        imageUrl: '/assets/images/rmdxmachiato11.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 4,
        price: 20000,
        name: 'Rau má mix Macchiato',
        imageUrl: '/assets/images/Rau-ma-mix-Macchiato.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 5,
        price: 22000,
        name: 'Rau Má Mix Sầu Riêng Sữa Dừa (MỚI)',
        imageUrl: '/assets/images/rmsauriengsuadua21.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 6,
        price: 12000,
        name: 'Rau má nguyên chất',
        imageUrl: '/assets/images/rau-ma-nguyen-chat-22.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 7,
        price: 18000,
        name: 'Rau má sữa dừa',
        imageUrl: '/assets/images/rau-ma-sua-dua-23jpg.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 8,
        price: 18000,
        name: 'Rau má mix đậu xanh sữa dừa',
        imageUrl: '/assets/images/rau-ma-dau-xanh-sua-dua24.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 9,
        price: 20000,
        name: 'Rau má mix khoai môn sữa dừa ',
        imageUrl: '/assets/images/rau-ma-khoai-mon-sua-dua31.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 10,
        price: 20000,
        name: 'Đậu xanh sữa dừa',
        imageUrl: '/assets/images/dau-xanh-sua-dua-1.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 11,
        price: 18000,
        name: 'Khoai môn sữa dừa',
        imageUrl: '/assets/images/khoai-mon-sua-dua-33.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 12,
        price: 7000,
        name: 'Thạch Nấm Tuyết',
        imageUrl: '/assets/images/thach-nam-tuyet.jpg',
        tags:['Topping','Menu Rau Má Mix'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:2
      },
      {
        id: 13,
        price: 7000,
        name: 'Sương Sáo Hạt Chia',
        imageUrl: '/assets/images/Suong-sao-hat-chia.jpg',
        tags:['Topping','Menu Rau Má Mix'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:2
      },
      {
        id: 14,
        price: 7000,
        name: 'Thạch củ năng',
        imageUrl: '/assets/images/Thach-cu-nang.jpg',
        tags:['Topping','Menu Rau Má Mix'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:2
      },
      {
        id: 15,
        price: 5000,
        name: 'Thạch lá dứa',
        imageUrl: '/assets/images/Thach-la-dua.jpg',
        tags:['Topping','Menu Rau Má Mix'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:2
      },
      {
        id: 16,
        price:5000,
        name: 'Trân châu lá dứa',
        imageUrl: '/assets/images/Tran-chau-la-dua.jpg',
        tags:['Topping','Menu Rau Má Mix'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:2
      },
      {
        id: 17,
        price: 7000,
        name: 'Trân châu tuyết trắng',
        imageUrl: '/assets/images/Tran-chau-tuyet-trang.jpg',
        tags:['Topping','Menu Rau Má Mix'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:2
      },
      {
        id: 18,
        price: 7000,
        name: 'Thạch nha đam',
        imageUrl: '/assets/images/Thach-nha-dam.jpg',
        tags:['Topping','Menu Rau Má Mix'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:2
      },
      {
        id: 19,
        price: 30000,
        name: 'Combo 2',
        imageUrl: '/assets/images/combo-2.jpg',
        tags: ['Rau Má Mix', 'Combo Rau Má Mix'],
        description:'Rau má mix đậu xanh sữa dừa + Thạch nha đam + Thạch lá dứa + Trân châu tuyết trắng. Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:3
      },
      {
        id: 20,
        price: 32000,
        name: 'Combo 7',
        imageUrl: '/assets/images/combo-2.jpg',
        tags: ['Rau Má Mix', 'Combo Rau Má Mix'],
        description:'Rau má mix sầu riêng sữa dừa + Thạch nha đam + Sương sáo hạt chia + Thạch lá dứa. Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:3
      },
      {
        id: 21,
        price: 32000,
        name: 'Combo 8',
        imageUrl: '/assets/images/combo-8.jpg',
        tags: ['Rau Má Mix', 'Combo Rau Má Mix'],
        description:'Rau má mix sầu riêng sữa dữa + thạch củ năng + thạch lá dứa + trân châu tuyết trắng. Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:3
      },
      {
        id: 22,
        price: 30000,
        name: 'Combo 6',
        imageUrl: '/assets/images/combo-6.jpg',
        tags: ['Rau Má Mix', 'Combo Rau Má Mix'],
        description:'Khoai môn sữa dừa + Sương sáo hạt chia + Thạch lá dứa + Trân châu tuyết trắng. Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:1
      },
      {
        id: 23,
        price: 30000,
        name: 'Combo 5',
        imageUrl: '/assets/images/combo-5.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Đậu xanh sữa dừa + Trân châu lá dứa + Thạch củ năng + Thạch lá dứa. Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:3
      },
      {
        id: 24,
        price: 29000,
        name: 'Combo 4',
        imageUrl: '/assets/images/combo-4-1.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Rau má sữa dừa + Thạch củ năng + Sương sáo hạt chia + Trân châu tuyết trắng. Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:3
      },
      {
        id: 25,
        price: 30000,
        name: 'Combo 3',
        imageUrl: '/assets/images/combo-83.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Rau má Mix Khoai Môn Sữa Dừa + Thạch lá dứa + Thạch củ năng + Sương sáo hạt chia. Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:3
      },
      {
        id: 26,
        price: 20000,
        name: 'Combo 1',
        imageUrl: '/assets/images/combo-1.jpg',
        tags: ['Rau Má Mix', 'Rau Má'],
        description:'Rau má mix đậu xanh sữa dừa + Trân châu lá dứa + Thạch củ năng + Sương sáo hạt chia. Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:3
      },
      {
        id: 27,
        price: 18000,
        name: 'Bánh Tráng Mix Tôm Hành',
        imageUrl: '/assets/images/banh-trang-mix-tom-hanh.jpg',
        tags: ['Bánh Tráng Mix', 'Bánh Tráng'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:4
      },
      {
        id: 28,
        price: 18000,
        name: 'Bánh Tráng Mix Khô Bò',
        imageUrl: '/assets/images/banh-trang-mix-kho-bo.jpg',
        tags: ['Bánh Tráng Mix', 'Bánh Tráng'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:4
      },
      {
        id: 29,
        price: 18000,
        name: 'Bánh Tráng Mix Phô Mai',
        imageUrl: '/assets/images/banh-trang-mix-pho-mai93.jpg',
        tags: ['Bánh Tráng Mix', 'Bánh Tráng'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:4
      },
      {
        id: 30,
        price: 18000,
        name: 'Bánh Tráng Mix Khô Gà Lá Chanh',
        imageUrl: '/assets/images/banh-trang-mix-kho-ga-la-chanh94.jpg',
        tags: ['Bánh Tráng Mix', 'Bánh Tráng'],
        description:'Đặt hàng ngay hotline Hotline : 1900633934',
        cate_id:4
      }
    ];
  }

}
