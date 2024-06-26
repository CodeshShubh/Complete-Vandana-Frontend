import {
  Bar,
  CartItem,
  Line,
  Order,
  Pie,
  Product,
  ShippingInfo,
  Stats,
  User,
} from "./types";
  
  // Custom Error for products.tsx
  export type CustomError = {
    status: number;
    data: {
      message: string;
      success: boolean;
    };
  };
  
  export type MessageResponse = {
    success: boolean;
    message: string;
  };
  
  // for user api for that admin check all users
  export type AllUsersResponse = {
    success: boolean;
    users: User[];
  };
  
// this user form database
  export type UserResponse = {
    success: boolean;
    user: User;
  };
  
  // for product in admin dashboard
  export type AllProductsResponse = {
    success: boolean;
    products: Product[];
  };

// this is for Categories for search bar page
  export type CategoriesResponse = {
    success: boolean;
    categories: string[];
  };
  
  // for show productCard and search by quary like max price search by name 
  export type SearchProductsResponse = AllProductsResponse & {
    totalPage: number;
  };
  export type SearchProductsRequest = {
    price: number;
    page: number;
    category: string;
    search: string;
    sort: string;
  };

  export type ProductResponse = {
    success: boolean;
    product: Product;
  };
  
  export type AllOrdersResponse = {
    success: boolean;
    orders: Order[];
  };

  export type OrderDetailsResponse = {
    success: boolean;
    order: Order;
  };
  

  // for dashboard
  export type StatsResponse = {
    success: boolean;
    stats: Stats;
  };
  
  export type PieResponse = {
    success: boolean;
    charts: Pie;
  };
  
  export type BarResponse = {
    success: boolean;
    charts: Bar;
  };
  
  export type LineResponse = {
    success: boolean;
    charts: Line;
  };
  

// create newProduct request (productmanagement.tsx)
  export type NewProductRequest = {
    id: string;
    formData: FormData;
  };
  export type UpdateProductRequest = {
    userId: string;
    productId: string;
    formData: FormData;
  };
  export type DeleteProductRequest = {
    userId: string;
    productId: string;
  };


  
  // crate for neworder in orderAPI.ts
  export type NewOrderRequest = {
    shippingInfo: ShippingInfo;
    orderItems: CartItem[];
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    user: string;
  };
  
  // updateOrder in orederAPI.ts
  export type UpdateOrderRequest = {
    userId: string;
    orderId: string;
  };
  
    // now
  export type DeleteUserRequest = {
    userId: string;
    adminUserId: string;
  };
  
  