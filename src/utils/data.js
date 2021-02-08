import productBanner from "../images/banner/productBanner.jpg";
import aboutBanner from "../images/banner/aboutBanner.jpg";
import frontImg1 from "../images/card/front/1.jpg";
import frontImg2 from "../images/card/front/2.jpg";
import frontImg3 from "../images/card/front/3.jpg";
import frontImg4 from "../images/card/front/4.jpg";
import frontImg6 from "../images/card/front/6.jpg";
import frontImg7 from "../images/card/front/7.jpg";

export const productList = [
    {
        id: 1,
        name: "Matcha Cake", 
        image: "https://i.imgur.com/7oXtjZ3.jpg",
        price: 150,
        category: "cake"  
    },
    {
        id: 2,
        name: "CARROT CAKE",  
        image: "https://i.imgur.com/0KdVIwb.jpg",
        price: 50,
        category: "cake"
    },
    {
        id: 3,
        name: "Mimosa", 
        image: "https://i.imgur.com/TEkAozX.jpg",
        price: 150,
        category: "cake"
    },
    {
        id: 4,
        name: "Caramel Explosion",
        image: "https://i.imgur.com/Fu3l1Bs.jpg",
        price: 200,
        category: "cake"
    },
    {
        id: 5,
        name: "Favna Double Cheese",  
        image: "https://i.imgur.com/yWbm703.jpg",
        price: 150,
        category: "cake"
    },
    {
        id: 6,
        name: "Choco Passion", 
        image: "https://i.imgur.com/8FG5wav.jpg",
        price: 32,
        category: "cookie"
    },
    {
        id: 7,  
        name: "Sweet Suprise",
        image: "https://i.imgur.com/laY01Np.jpg", 
        price: 95,
        category: "cookie"
    },
    {
        id: 8,  
        name: "Lemon Tart",
        image: "https://i.imgur.com/s2IODdI.jpg", 
        price: 100,
        category: "tart"
    },
    {
        id: 9,  
        name: "Choclate Tart",
        image: "https://i.imgur.com/5ofhYyd.jpg", 
        price: 100,
        category: "tart"
    },
    {
        id: 10,  
        name: "Fruit Tart",
        image: "https://i.imgur.com/Bl2kxIH.jpg", 
        price: 50,
        category: "tart"
    },
    {
        id: 11,  
        name: "Chocochip Cookie",
        image: "https://i.imgur.com/FlkR1wM.jpg", 
        price: 30,
        category: "cookie"
    },
    {
        id: 12,  
        name: "Dariole",
        image: "https://i.imgur.com/qKjxBuD.jpg", 
        price: 150,
        category: "cake"
    },
    {
        id: 14,  
        name: "Cupcake Basket",
        image: "https://i.imgur.com/WxHjiBP.jpg", 
        price: 150,
        category: "cake"
    },
    {
        id: 15,  
        name: "Cookie",
        image: "https://i.imgur.com/bStoqHP.jpg", 
        price: 30,
        category: "cookie"
    },
]


export const categories = [
    "all",
    "cake",
    "tart",
    "cookie"
]

export const banner = {
    productList: productBanner,
    about: aboutBanner
}


export const product = {
    id: 12,
    name: "Dariole",
    images: [
        "https://i.imgur.com/ymCLhFq.jpg",
        "https://i.imgur.com/gaDJ9ex.jpg",
        "https://i.imgur.com/urUGwt0.jpg",
        "https://i.imgur.com/pZqRJRc.jpg"
    ],
    price: 150,
    category: "cake",
    shortDescription: "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Massa sapien faucibus et molestie ac. Nunc sed id semper risus in hendrerit gravida, dolor magna eget est lorem.",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam. Ullamcorper malesuada proin libero nunc consequat. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Massa enim nec dui nunc mattis enim ut tellus elementum. Suscipit tellus mauris a diam maecenas nisi vitae.",
    weight: "230g",
    dimensions: "50 x 50 x 10cm"
}


export const cardFrontImages = [
    frontImg1,
    frontImg2,
    frontImg3,
    frontImg4,
    frontImg6,
    frontImg7
]


    
export const defaultCarts = [
    {
      "card": [
        "recBuwTaIWMZpjtpt"
      ],
      "quantity": 1,
      "id": 3,
      "user": [
        "recnKXNaCFLJ749ki"
      ],
      "card_id": [
        1
      ],
      "card_name": [
        "your card"
      ],
      "card_front": [
        {
          "id": "atttVHsTm0M6KLNeC",
          "url": "https://dl.airtable.com/.attachments/5bc9ec49eccc0aa0f975306af8713a68/05e37a5e/1.jpg",
          "filename": "1.jpg",
          "size": 96781,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/dc3f8a82e5c98fe99bea585f33e6061d/dd93a4c2",
              "width": 51,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/c22fad3e5676084987fb386a42997735/2d800d6e",
              "width": 721,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/f5026b51870383c8ac087293029b4802/a7d17172",
              "width": 3000,
              "height": 3000
            }
          }
        }
      ],
      "card_back": [
        {
          "id": "atttVHsTm0M6KLNeC",
          "url": "https://dl.airtable.com/.attachments/5bc9ec49eccc0aa0f975306af8713a68/05e37a5e/1.jpg",
          "filename": "1.jpg",
          "size": 96781,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/dc3f8a82e5c98fe99bea585f33e6061d/dd93a4c2",
              "width": 51,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/c22fad3e5676084987fb386a42997735/2d800d6e",
              "width": 721,
              "height": 512
            },
            "full": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/f5026b51870383c8ac087293029b4802/a7d17172",
              "width": 3000,
              "height": 3000
            }
          }
        }
      ],
      "created_time": "2021-02-06T09:24:11.000Z"
    },
    {
      "quantity": 1,
      "product": [
        "recTVY6z3N48TjU6B"
      ],
      "id": 2,
      "user": [
        "recnKXNaCFLJ749ki"
      ],
      "product_id": [
        5
      ],
      "product_name": [
        "Favna Double Cheese"
      ],
      "product_price": [
        150
      ],
      "product_main_image": [
        {
          "id": "att90HkRkN6tmXSxu",
          "url": "https://dl.airtable.com/.attachments/a1b1e9959a1be29c6e28b615cf1d220a/248c4418/purple7.jpeg",
          "filename": "purple 7.jpeg",
          "size": 162079,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/2b8ea69984ddae76736e7bb7c665dc77/a473cc26",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/432e640b6d5b647c6567d56861eb345e/625a884d",
              "width": 500,
              "height": 500
            },
            "full": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/c77b1d74d1d409f207914710d9336aa9/3fd8d226",
              "width": 3000,
              "height": 3000
            }
          }
        }
      ],
      "created_time": "2021-02-06T09:23:28.000Z"
    },
    {
      "quantity": 2,
      "product": [
        "recmXMCWYp5Vyqp9F"
      ],
      "id": 1,
      "user": [
        "recnKXNaCFLJ749ki"
      ],
      "product_id": [
        1
      ],
      "product_name": [
        "Matcha Cake"
      ],
      "product_price": [
        150
      ],
      "product_main_image": [
        {
          "id": "att71UIQCgRCWoEVh",
          "url": "https://dl.airtable.com/.attachments/0ae7a49b0c723a1cb995522215ffa8eb/e12fb3e6/5.jpeg",
          "filename": "5.jpeg",
          "size": 14071,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/a7fd0b2c1eaa8a8fb853fc726450da01/3fc0c4fb",
              "width": 36,
              "height": 36
            },
            "large": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/f258764e2820e460506dcf10ccd291e0/0cca77ae",
              "width": 300,
              "height": 300
            },
            "full": {
              "url": "https://dl.airtable.com/.attachmentThumbnails/0e4a344e3b20a7a1396aa919da8986f1/1fcab660",
              "width": 3000,
              "height": 3000
            }
          }
        }
      ],
      "created_time": "2021-02-05T02:44:58.000Z"
    }
  ]