const menu = [
  {
    name: 'Dal Fry',
    price: 140,
    des: 'Enjoy this timeless classic prepartion of lentils and spices that will make your mouth water.',
    veg: true,
    category: 'Recommended'
  },
  {
    name: 'Amul Dal Fry',
    price: 150,
    des: "Serves 1 | Dal tadka are cooked lentils which are lastly tempered with amul butter fried spices &amp; herbs | Chef's Special |",
    veg: true,
    category: 'Recommended'
  },
  {
    name: 'Dal Makhani ',
    price: 210,
    des: "Serves 1 | Soft and creamy Dal cooked with love, makes for a great meal | Chef's Special |",
    veg: true,
    category: 'Recommended'
  },
  {
    name: 'Moong Dal Fry',
    price: 140,
    des: 'Serves 1',
    veg: true,
    category: 'Recommended'
  },
  {
    name: 'Jeera Chawal',
    price: 140,
    veg: true,
    category: 'Recommended'
  },
  {
    name: 'Singapuri Fried Rice',
    price: 190,
    veg: true,
    category: 'Recommended'
  },
  {
    name: 'Dal Fry',
    price: 140,
    des: 'Enjoy this timeless classic prepartion of lentils and spices that will make your mouth water.',
    veg: true,
    category: 'Main_Course'
  },
  {
    name: 'Amul Dal Fry',
    price: 150,
    des: "Serves 1 | Dal tadka are cooked lentils which are lastly tempered with amul butter fried spices &amp; herbs | Chef's Special |",
    veg: true,
    category: 'Main_Course'
  },
  {
    name: 'Dal Makhani ',
    price: 210,
    des: "Serves 1 | Soft and creamy Dal cooked with love, makes for a great meal | Chef's Special |",
    veg: true,
    category: 'Main_Course'
  },
  {
    name: 'Dal Makhani Punjabi Tadka',
    price: 230,
    des: "Serves 1 | This dal has whole black lentils cooked with butter and cream and simmered on low heat for that unique flavor | Chef's Special |",
    veg: true,
    category: 'Main_Course'
  },
  {
    name: 'Moong Dal Fry',
    price: 140,
    des: 'Serves 1',
    veg: true,
    category: 'Main_Course'
  },
  {
    name: 'Special Dal Tadka',
    price: 180,
    veg: true,
    category: 'Main_Course'
  },
  {
    name: 'Plain Chawal',
    price: 110,
    veg: true,
    category: 'Chawal___Biryani'
  },
  {
    name: 'Jeera Chawal',
    price: 140,
    veg: true,
    category: 'Chawal___Biryani'
  },
  {
    name: 'Fry Chawal',
    price: 180,
    veg: true,
    category: 'Chawal___Biryani'
  },
  {
    name: 'Chinese Fry Rice',
    price: 190,
    veg: true,
    category: 'Chawal___Biryani'
  },
  {
    name: 'Singapuri Fried Rice',
    price: 190,
    veg: true,
    category: 'Chawal___Biryani'
  },
  {
    name: 'Stuffed Naan (1 Pc)',
    price: 90,
    des: 'Serves 1 | A yummy and soft stuffed naan topped with a dollop of butter, serves as the perfect side.',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Plain Roti (1 Pc)',
    price: 15,
    des: 'Serves 1 | Piping hot and fluffy roti that serves as the best side for any dish.',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Amul Butter Roti',
    price: 25,
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Missi Pyaj Roti',
    price: 45,
    des: 'Serves 1 | Punjabi missi roti or flatbreads made with whole wheat flour, gram flour (chickpea flour) and spices',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Butter Roti',
    price: 20,
    des: 'Piping hot and fluffy roti, topped with a dollop of butter.',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Pyaj Roti',
    price: 40,
    des: 'Serves 1 | Indian Flatbread Traditionally Made In Tandoor Using Butter and onion',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Pyaj Naan',
    price: 100,
    des: 'Serves 1 | Naan with a layering of onion',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Missi Roti',
    price: 40,
    des: 'Flatbreads made with whole wheat flour, gram flour and spices that serve as the perfect side.',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Lachha Paratha',
    price: 55,
    des: 'This laccha paratha is the perfect side for all dishes.',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Butter Naan ',
    price: 65,
    des: 'A yummy and soft naan topped with a dollop of butter, serves as the perfect side.',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Tiranga Naan',
    price: 65,
    des: 'A yummy and soft naan topped with a dollop of butter, serves as the perfect side.',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Paneer Paratha',
    price: 90,
    des: 'Perfectly cooked Paratha, stuffed with a yummy paneer &amp; veggies filling is the best choice for your meal!',
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Paneer Naan',
    price: 100,
    veg: true,
    category: 'Tandoori_Khazana'
  },
  {
    name: 'Deluxe Thali',
    price: 350,
    veg: true,
    category: 'Thali'
  },
  {
    name: 'Thali',
    price: 180,
    des: '2 Sabji + 5 Roti.',
    veg: true,
    category: 'Thali'
  },
  {
    name: 'Special Thali',
    price: 280,
    des: 'Shahi Paneer,Mix  Veg, Raita, Chawal, Simple Roti 3.',
    veg: true,
    category: 'Thali'
  },
  {
    name: 'Kadhi Pakoda',
    price: 140,
    des: "A delicious curd-based gravy you wouldn't want to miss!",
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Besan Gatta',
    price: 140,
    des: 'Serves 1 | Curry Steamed dumplings made from chickpea flour cooked in a spiced yoghurt sauce.',
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Aloo Jeera',
    price: 160,
    des: 'Serves 1 | Jeera Aloo is a typical vegetarian Indian dish which is often served as a side dish and normally goes well with hot puris, chapatti, roti or dal.',
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Baingan Bharta',
    price: 160,
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Malai Kofta',
    price: 260,
    des: "Soft and delicious malai kofta in a creamy curry, you won't get enough of this dish.",
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Aloo Matar',
    price: 160,
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Mix Veg',
    price: 240,
    des: 'Enjoy this delicious assortment of veggies prepared with fresh spices.',
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Chana Masala',
    price: 240,
    des: 'A yummy masala dish made of boiled chanas.',
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Matar  masala',
    price: 240,
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Dahi Fry',
    price: 160,
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Aloo Chhole',
    price: 160,
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Aloo Palak',
    price: 180,
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Sev Bhaji',
    price: 200,
    des: 'Relish this delicious sabzi made with fresh veggies.',
    veg: true,
    category: 'Lamb_Shahi_Sabjiya'
  },
  {
    name: 'Dahi Plain',
    price: 80,
    veg: true,
    category: 'Dahi'
  },
  {
    name: 'Boondi Raita',
    price: 110,
    des: 'A lip-smacking yoghurt made with crunchy boondi.',
    veg: true,
    category: 'Dahi'
  },
  {
    name: 'Mix Raita',
    price: 120,
    veg: true,
    category: 'Dahi'
  },
  {
    name: 'Green salad',
    price: 60,
    veg: true,
    category: 'Salad'
  },
  {
    name: 'Papad',
    price: 19,
    veg: true,
    category: 'Salad'
  },
  {
    name: 'Papad.',
    price: 30,
    veg: true,
    category: 'Snacks'
  },
  {
    name: 'Mineral Water (1 ltr)',
    price: 40,
    des: 'Mineral Water (1 Ltr).',
    veg: true,
    category: 'Beverages'
  },
  {
    name: 'Matar Paneer',
    price: 240,
    des: 'This delicious paneer and peas dish will leave you wanting for more.',
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Paneer Bhurji',
    price: 290,
    des: 'Relish this scrambled Indian cottage cheese with onion, tomatoes and spices.',
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Chhole Paneer',
    price: 240,
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Palak Paneer',
    price: 239,
    des: 'Juicy chunks of paneer cooked in a creamy gravy with a nutritious spinach.',
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Malai Paneer',
    price: 280,
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Paneer Butter Masala',
    price: 280,
    des: "Soft and indulgent paneer cooked in a creamy masala curry, this gravy is finger-lickin'-good.",
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Kadai Paneer',
    price: 280,
    des: 'Soft and creamy paneer, prepared with a delicious masala, this Kadai Paneer will leave you licking your fingers.',
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Cheese Tomato ',
    price: 240,
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Gravy Chap',
    price: 280,
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Kadhai Chap Gravy',
    price: 280,
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Cream Chap Gravy',
    price: 280,
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Shahi Paneer',
    price: 280,
    des: 'Made with a royal taste, this soft and creamy paneer dish will leave you wanting for more.',
    veg: true,
    category: 'Lamb_Shahi_Paneer'
  },
  {
    name: 'Aloo pratha',
    price: 55,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Gobhi Pratha',
    price: 55,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Lacha pratha',
    price: 55,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Paneer pratha',
    price: 79,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Kulcha Naan',
    price: 85,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Gud Pratha',
    price: 65,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Chini pratha',
    price: 55,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Green chilli roti',
    price: 45,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Tiranga pratha',
    price: 55,
    veg: true,
    category: 'Breads'
  },
  {
    name: "Chilli lacha pratha'",
    price: 65,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Tiranga naan Special',
    price: 100,
    veg: true,
    category: 'Breads'
  },
  {
    name: 'Chillli Naan',
    price: 100,
    veg: true,
    category: 'Breads'
  }
]

export default menu
