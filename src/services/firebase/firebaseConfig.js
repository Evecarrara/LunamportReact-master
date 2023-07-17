// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT7zf20WpVgcPB73_MzMYBvyaMoEXLxBw",
  authDomain: "lunaimports-1fbbc.firebaseapp.com",
  projectId: "lunaimports-1fbbc",
  storageBucket: "lunaimports-1fbbc.appspot.com",
  messagingSenderId: "340138482090",
  appId: "1:340138482090:web:733bf6be99a46bb239b3d3",
  measurementId: "G-DK2WN1RTDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// CARGAR PRODUCTOS AL COLLECTION

// const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

// const products = [
//         {
            
//             name: 'Apple - Apple Watch Series 3 White Sports Band',
//             category: 'Watch',
//             price: 300,
//             description: description,
//             stock: 15,
//             img: '../images/product-1.jpg',
//             full: '../images/product-1-full.jpg'           
//         },
//         {
            
//             name: 'Baseus - Wireless In-Ear Black Edition',
//             category: 'Earphones',
//             price: 200,
//             description: description,
//             stock: 20,
//             img: '../images/product-2.jpg',
//             full: '../images/product-2-full.jpg'  
//         },
//         {
            
//             name: 'iPhone 13 Pro Max',
//             category: 'Cellphone',
//             price: 990,
//             description: description,
//             stock: 5,
//             img: '../images/product-3.jpg',
//             full: '../images/product-3-full.jpg'  
//         },
//         {
            
//             name: 'GoPro - Camera GoPro Hero 7 Black',
//             category: 'Camera',
//             price: 750,
//             description: description,
//             stock: 10,
//             img: '../images/product-4.jpg',
//             full: '../images/product-4-full.jpg'  
//         },
//         {
            
//             name: 'Apple Watch Series 8',
//             category: 'Watch',
//             price: 750,
//             description: description,
//             stock: 10,
//             img: '../images/product-5.jpg',
//             full: '../images/product-5-full.jpg'  
//         },
//         {
            
//             name: 'Minor III * Marshall',
//             category: 'Earphones',
//             price: 300,
//             description: description,
//             stock: 5,
//             img: '../images/product-6.jpg',
//             full: '../images/product-6-full.jpg' 
//         },
//         {
            
//             name: 'iPhone 14 Pro Max ',
//             category: 'Cellphone',
//             price: 1500,
//             description: description,
//             stock: 3,
//             img: '../images/product-7.jpg',
//             full: '../images/product-7-full.jpg'  
//         },
//         {
            
//             name: 'Sony Alpha ZV-E10',
//             category: 'Camera',
//             price: 1750,
//             description: description,
//             stock: 5,
//             img: '../images/product-8.jpg',
//             full: '../images/product-8-full.jpg'  
//         }
// ]

// async function addProductsToFirestore() {
//   const productsCollectionRef = collection(db, "products");

//   for (const product of products) {
//     await addDoc(productsCollectionRef, product);
//   }
// }

// addProductsToFirestore();