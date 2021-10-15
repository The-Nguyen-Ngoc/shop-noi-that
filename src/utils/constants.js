import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'trang chủ',
    url: '/',
  },
  {
    id: 2,
    text: 'Về chúng tôi',
    url: '/about',
  },
  {
    id: 3,
    text: 'Sản phẩm',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'xứ mệnh',
    text: 'Mang đến cho ngôi nhà của bạn không gian đẹp nhất',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'góc nhìn',
    text: 'Góc nhìn từ những nhà thiết kế có nhiều năm kinh nghiệm, sẽ mang lại trải nghiệm tốt nhất cho không gian của bạn',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'lịch sử',
    text: 'Chúng tôi có lịch sử lâu đời trong ngành nội thật trên thế giới',
  },
];

export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
