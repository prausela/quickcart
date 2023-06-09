import { useState } from "react";
import { ShopTile } from "./tiles/tile";
import { ShelfTile } from "./tiles/shelfTile";
import { TILE_TYPE } from "./tiles/tileType";
import InterfaceController from "./components/InterfaceController";

function App() {
  const [productList, setProductList] = useState([
    { id: 1, name: "Leche La Serenísima 1L" },
    { id: 2, name: "Palta Hass 1u" },
    { id: 3, name: "Vivere Suavizante Clásico" },
    { id: 4, name: "Suprema de Pollo 1kg" },
    { id: 5, name: "Lomo Premium 1kg" },
    { id: 6, name: "Milanesa Nalga 1kg" },
    { id: 7, name: "Bife de Chorizo 1kg" },
    { id: 8, name: "Beefeater London Dry Gin 1L" },
    { id: 9, name: "Aperitivo Campari 750cc" },
    { id: 10, name: "Cerveza Heineken" },
    { id: 11, name: "Oreo Galletas" },
    { id: 12, name: "Finlandia Queso Untable" },
    { id: 13, name: "Cebolla Blanca 1kg" },
    { id: 14, name: "Limón 1u" },
    { id: 15, name: "Pera 1u" },
    { id: 16, name: "Yogurisimo Natural" },
    { id: 17, name: "Leche Condensada" },
    { id: 18, name: "Crema de Leche Tonadita 200cc" },
    { id: 19, name: "Manteca La Serenísima" },
    { id: 20, name: "Sprite Light 1L" },
    { id: 21, name: "Coca-Cola Original 2.25l" },
    { id: 22, name: "Arvejas Remojadas en Lata" },
    { id: 23, name: "Ketchup Hellmann's" },
    { id: 24, name: "Pure de Tomates" },
    { id: 25, name: "Fideos Don Vincente" },
    { id: 26, name: "Arroz Dos Hermanos" },
    { id: 27, name: "Aceite de Girasol Pureza" },
    { id: 28, name: "Vinagre de Alcohol" },
    { id: 29, name: "Giacomo Capelletini Tricolor" },
    { id: 30, name: "Dulce de Leche La Serenísima" },
    { id: 31, name: "Miel Aleluya" },
    { id: 32, name: "El Brocal Mermelada de Ciruela" },
    { id: 33, name: "Alicante Orégano" },
    { id: 34, name: "Sal Fina" },
    { id: 35, name: "Playadito Yerba Mate" },
    { id: 36, name: "Papel Higiénico Elite" },
    { id: 37, name: "Procenex Limpiador Lavanda" },
    { id: 38, name: "Jamón Cocido Paladini" },
    { id: 39, name: "Malbec Alma Mora" },
    { id: 40, name: "Pilas Duracell" },
  ]);

  const [shoppingLists, setShoppingLists] = useState([
    {
      name: "Cena Familiar",
      products: [2, 4, 26, 27, 14, 31, 34, 28, 38, 33, 23, 20, 21],
    },
    {
      name: "Compra Semanal",
      products: [3, 36, 37, 38, 24, 25, 29, 35, 11, 8],
    },
  ]);

  //productId: isChecked
  const [currentList, setCurrentList] = useState([]);

  const [imageMap, setImageMap] = useState('');

  const [shoppings, setShoppings] = useState([{id: 1, name: "Carrefour Retiro", distance: 1500, address: "Arroyo 810",
    map: [
      new ShopTile(TILE_TYPE.WALL, 0, 0), new ShopTile(TILE_TYPE.WALL, 0, 1),       new ShopTile(TILE_TYPE.WALL, 0, 2),   new ShopTile(TILE_TYPE.WALL, 0, 3),     new ShopTile(TILE_TYPE.WALL, 0, 4),                    new ShopTile(TILE_TYPE.WALL, 0, 5),  new ShopTile(TILE_TYPE.WALL, 0, 6),       new ShopTile(TILE_TYPE.WALL, 0, 7),       new ShopTile(TILE_TYPE.WALL, 0, 8),   new ShopTile(TILE_TYPE.WALL, 0, 9),         new ShopTile(TILE_TYPE.WALL, 0, 10),                  new ShopTile(TILE_TYPE.WALL, 0, 11),  new ShopTile(TILE_TYPE.WALL, 0, 12), new ShopTile(TILE_TYPE.WALL, 0, 13),
      new ShopTile(TILE_TYPE.WALL, 1, 0), new ShopTile(TILE_TYPE.AISLE, 1, 1),      new ShopTile(TILE_TYPE.AISLE, 1, 2),  new ShopTile(TILE_TYPE.AISLE, 1, 3),    new ShopTile(TILE_TYPE.AISLE, 1, 4),                   new ShopTile(TILE_TYPE.AISLE, 1, 5), new ShopTile(TILE_TYPE.AISLE, 1, 6),      new ShopTile(TILE_TYPE.AISLE, 1, 7),      new ShopTile(TILE_TYPE.AISLE, 1, 8),  new ShopTile(TILE_TYPE.AISLE, 1, 9),        new ShopTile(TILE_TYPE.AISLE, 1, 10),                 new ShopTile(TILE_TYPE.AISLE, 1, 11), new ShopTile(TILE_TYPE.AISLE, 1, 12), new ShopTile(TILE_TYPE.WALL, 1, 13),
      new ShopTile(TILE_TYPE.WALL, 2, 0), new ShopTile(TILE_TYPE.AISLE, 2, 1),      new ShopTile(TILE_TYPE.AISLE, 2, 2),  new ShelfTile(2, 3, "Higiene", [36]),    new ShelfTile(2, 4, "Enlatados", [17,22]),            new ShopTile(TILE_TYPE.AISLE, 2, 5), new ShopTile(TILE_TYPE.AISLE, 2, 6),      new ShopTile(TILE_TYPE.AISLE, 2, 7),      new ShopTile(TILE_TYPE.AISLE, 2, 8),  new ShelfTile(2, 9, "Bebidas N/A", [20]), new ShelfTile(2, 10, "Bebidas Alcohólicas", [9,10]), new ShopTile(TILE_TYPE.AISLE, 2, 11), new ShopTile(TILE_TYPE.AISLE, 2, 12), new ShopTile(TILE_TYPE.WALL, 2, 13),
      new ShopTile(TILE_TYPE.WALL, 3, 0), new ShelfTile(3, 1, "Lácteos", [1,12]),   new ShopTile(TILE_TYPE.AISLE, 3, 2),  new ShelfTile(3, 3, "Higiene", [36]),    new ShelfTile(3, 4, "Enlatados", [17,22]),            new ShopTile(TILE_TYPE.AISLE, 3, 5), new ShopTile(TILE_TYPE.AISLE, 3, 6),      new ShopTile(TILE_TYPE.AISLE, 3, 7),      new ShopTile(TILE_TYPE.AISLE, 3, 8),  new ShelfTile(3, 9, "Bebidas N/A", [20]), new ShelfTile(3, 10, "Bebidas Alcohólicas", [9,10]), new ShopTile(TILE_TYPE.AISLE, 3, 11), new ShelfTile(3, 12, "Carniceria", [4,7]), new ShopTile(TILE_TYPE.WALL, 3, 13),
      new ShopTile(TILE_TYPE.WALL, 4, 0), new ShelfTile(4, 1, "Lácteos", [1,12]),   new ShopTile(TILE_TYPE.AISLE, 4, 2),  new ShelfTile(4, 3, "Higiene", [36]),    new ShelfTile(4, 4, "Mermeladas y Miel", [30,31,32]), new ShopTile(TILE_TYPE.AISLE, 4, 5), new ShelfTile(4, 6, "Verdulería", [2,13]), new ShelfTile(4, 7, "Frutas", [14,15]), new ShopTile(TILE_TYPE.AISLE, 4, 8),   new ShelfTile(4, 9, "Bebidas N/A", [20]), new ShelfTile(4, 10, "Bebidas Alcohólicas", [10]),     new ShopTile(TILE_TYPE.AISLE, 4, 11), new ShelfTile(4, 12, "Carniceria", [4,7]), new ShopTile(TILE_TYPE.WALL, 4, 13),
      new ShopTile(TILE_TYPE.WALL, 5, 0), new ShelfTile(5, 1, "Lácteos", [1,12]),   new ShopTile(TILE_TYPE.AISLE, 5, 2),  new ShelfTile(5, 3, "Higiene", [36]),    new ShelfTile(5, 4, "Mermeladas y Miel", [30,31,32]), new ShopTile(TILE_TYPE.AISLE, 5, 5), new ShelfTile(5, 6, "Verdulería", [2,13]), new ShelfTile(5, 7, "Frutas", [14,15]), new ShopTile(TILE_TYPE.AISLE, 5, 8),   new ShelfTile(5, 9, "Bebidas N/A", [20]), new ShelfTile(5, 10, "Bebidas Alcohólicas", [10]),     new ShopTile(TILE_TYPE.AISLE, 5, 11), new ShelfTile(5, 12, "Carniceria", [4,7]), new ShopTile(TILE_TYPE.WALL, 5, 13),
      new ShopTile(TILE_TYPE.WALL, 6, 0), new ShelfTile(6, 1,"Lácteos", [12,16,18]), new ShopTile(TILE_TYPE.AISLE, 6, 2), new ShelfTile(6, 3, "Limpieza", [3,37]), new ShelfTile(6, 4, "Aderezos", [23,24]),            new ShopTile(TILE_TYPE.AISLE, 6, 5),  new ShelfTile(6, 6, "Verdulería", [2,13]), new ShelfTile(6, 7, "Frutas", [14,15]), new ShopTile(TILE_TYPE.AISLE, 6, 8),   new ShelfTile(6, 9, "Bebidas N/A", [20]), new ShelfTile(6, 10, "Bebidas N/A", [20]),          new ShopTile(TILE_TYPE.AISLE, 6, 11), new ShelfTile(6, 12, "Carniceria", [4,7]), new ShopTile(TILE_TYPE.WALL, 6, 13),
      new ShopTile(TILE_TYPE.WALL, 7, 0), new ShelfTile(7, 1,"Lácteos", [12,16,18]), new ShopTile(TILE_TYPE.AISLE, 7, 2), new ShelfTile(7, 3, "Limpieza", [3,37]), new ShelfTile(7, 4, "Aderezos", [23,24]),         new ShopTile(TILE_TYPE.AISLE, 7, 5),  new ShelfTile(7, 6, "Verdulería", [2,13]), new ShelfTile(7, 7, "Frutas", [14,15]), new ShopTile(TILE_TYPE.AISLE, 7, 8),   new ShelfTile(7, 9, "Bebidas N/A", [20]), new ShelfTile(7, 10, "Bebidas N/A", [20]),          new ShopTile(TILE_TYPE.AISLE, 7, 11), new ShelfTile(7, 12, "Carniceria", [6,7]), new ShopTile(TILE_TYPE.WALL, 7, 13),
      new ShopTile(TILE_TYPE.WALL, 8, 0), new ShelfTile(8, 1,"Lácteos", [16,18]), new ShopTile(TILE_TYPE.AISLE, 8, 2), new ShelfTile(8, 3, "Limpieza", [3,37]), new ShelfTile(8, 4, "Aderezos", [28,33]),         new ShopTile(TILE_TYPE.AISLE, 8, 5),  new ShopTile(TILE_TYPE.AISLE, 8, 6),      new ShopTile(TILE_TYPE.AISLE, 8, 7),      new ShopTile(TILE_TYPE.AISLE, 8, 8),  new ShelfTile(8, 9, "Vinos", [39]),          new ShelfTile(8, 10, "Frutas", [14]),                  new ShopTile(TILE_TYPE.AISLE, 8, 11), new ShelfTile(8, 12, "Carniceria", [6,7]), new ShopTile(TILE_TYPE.WALL, 8, 13),
      new ShopTile(TILE_TYPE.WALL, 9, 0), new ShopTile(TILE_TYPE.AISLE, 9, 1),      new ShopTile(TILE_TYPE.AISLE, 9, 2),  new ShelfTile(9, 3, "Extras", [40]),     new ShelfTile(9, 4, "Aderezos", [28,33]),         new ShopTile(TILE_TYPE.AISLE, 9, 5),  new ShopTile(TILE_TYPE.AISLE, 9, 6),      new ShopTile(TILE_TYPE.AISLE, 9, 7),      new ShopTile(TILE_TYPE.AISLE, 9, 8),  new ShelfTile(9, 9, "Vinos", [39]),          new ShelfTile(9, 10, "Frutas", [14]),                  new ShopTile(TILE_TYPE.AISLE, 9, 11), new ShopTile(TILE_TYPE.AISLE, 9, 12), new ShopTile(TILE_TYPE.WALL, 9, 13),
      new ShopTile(TILE_TYPE.WALL, 10, 0), new ShopTile(TILE_TYPE.AISLE, 10, 1),    new ShopTile(TILE_TYPE.AISLE, 10, 2), new ShopTile(TILE_TYPE.AISLE, 10, 3),   new ShopTile(TILE_TYPE.AISLE, 10, 4),                 new ShopTile(TILE_TYPE.AISLE, 10, 5), new ShopTile(TILE_TYPE.AISLE, 10, 6),     new ShopTile(TILE_TYPE.AISLE, 10, 7),     new ShopTile(TILE_TYPE.AISLE, 10, 8), new ShopTile(TILE_TYPE.AISLE, 10, 9),       new ShopTile(TILE_TYPE.AISLE, 10, 10),                new ShopTile(TILE_TYPE.AISLE, 10, 11), new ShopTile(TILE_TYPE.AISLE, 10, 12), new ShopTile(TILE_TYPE.WALL, 10, 13),
      new ShopTile(TILE_TYPE.WALL, 11, 0), new ShopTile(TILE_TYPE.AISLE, 11, 1),    new ShopTile(TILE_TYPE.REG, 11, 2),   new ShopTile(TILE_TYPE.AISLE, 11, 3),   new ShopTile(TILE_TYPE.AISLE, 11, 4),                 new ShopTile(TILE_TYPE.REG, 11, 5),   new ShopTile(TILE_TYPE.AISLE, 11, 6),     new ShopTile(TILE_TYPE.AISLE, 11, 7),     new ShopTile(TILE_TYPE.REG, 11, 8),   new ShopTile(TILE_TYPE.AISLE, 11, 9),       new ShopTile(TILE_TYPE.AISLE, 11, 10),                new ShopTile(TILE_TYPE.REG, 11, 11),    new ShopTile(TILE_TYPE.AISLE, 11, 12), new ShopTile(TILE_TYPE.WALL, 11, 13),
      new ShopTile(TILE_TYPE.WALL, 12, 0), new ShopTile(TILE_TYPE.AISLE, 12, 1),    new ShopTile(TILE_TYPE.AISLE, 12, 2), new ShopTile(TILE_TYPE.AISLE, 12, 3),   new ShopTile(TILE_TYPE.AISLE, 12, 4),                 new ShopTile(TILE_TYPE.AISLE, 12, 5), new ShopTile(TILE_TYPE.AISLE, 12, 6),     new ShopTile(TILE_TYPE.AISLE, 12, 7),     new ShopTile(TILE_TYPE.AISLE, 12, 8), new ShopTile(TILE_TYPE.AISLE, 12, 9),       new ShopTile(TILE_TYPE.AISLE, 12, 10),                new ShopTile(TILE_TYPE.AISLE, 12, 11), new ShopTile(TILE_TYPE.AISLE, 12, 12), new ShopTile(TILE_TYPE.WALL, 12, 13),
      new ShopTile(TILE_TYPE.WALL, 13, 0), new ShopTile(TILE_TYPE.WALL, 13, 1),     new ShopTile(TILE_TYPE.WALL, 13, 2),  new ShopTile(TILE_TYPE.WALL, 13, 3),    new ShopTile(TILE_TYPE.EE, 13, 4),                    new ShopTile(TILE_TYPE.WALL, 13, 5),  new ShopTile(TILE_TYPE.WALL, 13, 6),      new ShopTile(TILE_TYPE.WALL, 13, 7),      new ShopTile(TILE_TYPE.WALL, 13, 8),  new ShopTile(TILE_TYPE.EE, 13, 9),          new ShopTile(TILE_TYPE.WALL, 13, 10),                 new ShopTile(TILE_TYPE.WALL, 13, 11), new ShopTile(TILE_TYPE.WALL, 13, 12), new ShopTile(TILE_TYPE.WALL, 13, 13)
    ],
    products: [1,2,3,4,6,7,9,10,12,13,14,15,16,17,18,20,22,23,24,28,30,31,32,33,36,37,39,40],
    rows: 14,
    columns: 14
    },
    {id: 2, name: "Superchino", distance: 500, address: "Cerrito 1320",
    map: [
      new ShopTile(TILE_TYPE.WALL, 0, 0), new ShopTile(TILE_TYPE.WALL, 0, 1),       new ShopTile(TILE_TYPE.WALL, 0, 2),     new ShopTile(TILE_TYPE.WALL, 0, 3),     new ShopTile(TILE_TYPE.WALL, 0, 4),                     new ShopTile(TILE_TYPE.WALL, 0, 5),                   new ShopTile(TILE_TYPE.WALL, 0, 6),         new ShopTile(TILE_TYPE.WALL, 0, 7),       new ShopTile(TILE_TYPE.WALL, 0, 8),             new ShopTile(TILE_TYPE.WALL, 0, 9),         new ShopTile(TILE_TYPE.WALL, 0, 10),        new ShopTile(TILE_TYPE.WALL, 0, 11),      new ShopTile(TILE_TYPE.WALL, 0, 12),          new ShopTile(TILE_TYPE.WALL, 0, 13), new ShopTile(TILE_TYPE.WALL, 0, 14), new ShopTile(TILE_TYPE.WALL, 0, 15), new ShopTile(TILE_TYPE.WALL, 0, 16), new ShopTile(TILE_TYPE.WALL, 0, 17),
      new ShopTile(TILE_TYPE.WALL, 1, 0), new ShopTile(TILE_TYPE.AISLE, 1, 1),      new ShopTile(TILE_TYPE.AISLE, 1, 2),    new ShopTile(TILE_TYPE.AISLE, 1, 3),    new ShelfTile(1, 4, "Higiene", [36]),                   new ShelfTile(1, 5, "Higiene", [36]),               new ShelfTile(1, 6, "Limpieza", [3,37]),      new ShelfTile(1, 7, "Limpieza", [37]),      new ShopTile(TILE_TYPE.AISLE, 1, 8),         new ShopTile(TILE_TYPE.AISLE, 1, 9),        new ShelfTile(1, 10, "Enlatados", [17]),     new ShelfTile(1, 11, "Enlatados", [17]),     new ShelfTile(1, 12, "Enlatados", [17,22]), new ShelfTile(1, 13, "Enlatados", [17,22]), new ShopTile(TILE_TYPE.AISLE, 1, 14), new ShopTile(TILE_TYPE.AISLE, 1, 15), new ShopTile(TILE_TYPE.AISLE, 1, 16), new ShopTile(TILE_TYPE.WALL, 1, 17),
      new ShopTile(TILE_TYPE.WALL, 2, 0), new ShopTile(TILE_TYPE.AISLE, 2, 1),      new ShopTile(TILE_TYPE.AISLE, 2, 2),    new ShopTile(TILE_TYPE.AISLE, 2, 3),    new ShopTile(TILE_TYPE.AISLE, 2, 4),                    new ShopTile(TILE_TYPE.AISLE, 2, 5),                  new ShopTile(TILE_TYPE.AISLE, 2, 6),        new ShopTile(TILE_TYPE.AISLE, 2, 7),      new ShopTile(TILE_TYPE.AISLE, 2, 8),          new ShopTile(TILE_TYPE.AISLE, 2, 9),        new ShopTile(TILE_TYPE.AISLE, 2, 10),         new ShopTile(TILE_TYPE.AISLE, 2, 11),     new ShopTile(TILE_TYPE.AISLE, 2, 12),       new ShopTile(TILE_TYPE.AISLE, 2, 13), new ShopTile(TILE_TYPE.AISLE, 2, 14), new ShopTile(TILE_TYPE.AISLE, 2, 15), new ShopTile(TILE_TYPE.AISLE, 2, 16), new ShopTile(TILE_TYPE.WALL, 2, 17),
      new ShopTile(TILE_TYPE.WALL, 3, 0), new ShopTile(TILE_TYPE.AISLE, 3, 1),      new ShopTile(TILE_TYPE.AISLE, 3, 2),    new ShopTile(TILE_TYPE.AISLE, 3, 3),    new ShopTile(TILE_TYPE.AISLE, 3, 4),                    new ShopTile(TILE_TYPE.AISLE, 3, 5),                  new ShopTile(TILE_TYPE.AISLE, 3, 6),        new ShopTile(TILE_TYPE.AISLE, 3, 7),      new ShopTile(TILE_TYPE.AISLE, 3, 8),           new ShopTile(TILE_TYPE.AISLE, 3, 9),        new ShopTile(TILE_TYPE.AISLE, 3, 10),        new ShopTile(TILE_TYPE.AISLE, 3, 11),   new ShopTile(TILE_TYPE.AISLE, 3, 12),         new ShopTile(TILE_TYPE.AISLE, 3, 13), new ShopTile(TILE_TYPE.AISLE, 3, 14), new ShopTile(TILE_TYPE.AISLE, 3, 15), new ShopTile(TILE_TYPE.AISLE, 3, 16), new ShopTile(TILE_TYPE.WALL, 3, 17),
      new ShopTile(TILE_TYPE.WALL, 4, 0), new ShelfTile(4, 1, "Lácteos", [1,12]),   new ShopTile(TILE_TYPE.AISLE, 4, 2),    new ShopTile(TILE_TYPE.AISLE, 4, 3),    new ShelfTile(4, 4, "Aderezos", [23,24]),               new ShelfTile(4, 5, "Aderezos", [23,24]),             new ShelfTile(4, 6,"Aderezos", [24, 27,28]), new ShelfTile(4, 7, "Aderezos", [27,28,33]), new ShelfTile(4, 8, "Aderezos", [33,34]),    new ShelfTile(4, 9, "Aderezos", [33,34]), new ShelfTile(4, 10, "Galletas", [11]),     new ShelfTile(4, 11, "Galletas", [11]),   new ShelfTile(4, 12, "Extras", [40]),        new ShelfTile(4, 13, "Extras", [26, 40]), new ShopTile(TILE_TYPE.AISLE, 4, 14), new ShopTile(TILE_TYPE.AISLE, 4, 15), new ShelfTile(4, 16, "Carniceria", [4,5,7]), new ShopTile(TILE_TYPE.WALL, 4, 17),
      new ShopTile(TILE_TYPE.WALL, 5, 0), new ShelfTile(5, 1, "Lácteos", [1,12]),   new ShopTile(TILE_TYPE.AISLE, 5, 2),    new ShopTile(TILE_TYPE.AISLE, 5, 3),    new ShelfTile(5, 4, "Mermeladas y Miel", [30, 31]),     new ShelfTile(5, 5, "Mermeladas y Miel", [30, 31, 32]),  new ShelfTile(5, 6, "Galletas", [11]), new ShelfTile(5, 7, "Yerba", [35]),              new ShelfTile(5, 8, "Yerba", [35]),      new ShelfTile(5, 9, "Enlatados", [17,22]), new ShelfTile(5, 10, "Enlatados", [17,22]),    new ShelfTile(5, 11, "Extras", [40]),     new ShelfTile(5, 12, "Extras", [40]),     new ShelfTile(5, 13, "Extras", [17,22,40]), new ShopTile(TILE_TYPE.AISLE, 5, 14), new ShopTile(TILE_TYPE.AISLE, 5, 15), new ShelfTile(5, 16, "Carniceria", [4,6,7]), new ShopTile(TILE_TYPE.WALL, 5, 17),
      new ShopTile(TILE_TYPE.WALL, 6, 0), new ShelfTile(6, 1,"Lácteos", [12,16]), new ShopTile(TILE_TYPE.AISLE, 6, 2),      new ShopTile(TILE_TYPE.AISLE, 6, 3),    new ShopTile(TILE_TYPE.AISLE, 6, 4),                    new ShopTile(TILE_TYPE.AISLE, 6, 5),                new ShopTile(TILE_TYPE.AISLE, 6, 6),         new ShopTile(TILE_TYPE.AISLE, 6, 7),          new ShopTile(TILE_TYPE.AISLE, 6, 8),       new ShopTile(TILE_TYPE.AISLE, 6, 9),        new ShopTile(TILE_TYPE.AISLE, 6, 10),          new ShopTile(TILE_TYPE.AISLE, 6, 11),    new ShopTile(TILE_TYPE.AISLE, 6, 12),     new ShopTile(TILE_TYPE.AISLE, 6, 13), new ShopTile(TILE_TYPE.AISLE, 6, 14), new ShopTile(TILE_TYPE.AISLE, 6, 15),   new ShelfTile(6, 16, "Carniceria", [4,5,7]), new ShopTile(TILE_TYPE.WALL, 6, 17),
      new ShopTile(TILE_TYPE.WALL, 7, 0), new ShelfTile(7, 1,"Lácteos", [12,16,18]), new ShopTile(TILE_TYPE.AISLE, 7, 2),   new ShopTile(TILE_TYPE.AISLE, 7, 3),    new ShopTile(TILE_TYPE.AISLE, 7, 4),                    new ShopTile(TILE_TYPE.AISLE, 7, 5),                new ShopTile(TILE_TYPE.AISLE, 7, 6),          new ShopTile(TILE_TYPE.AISLE, 7, 7),         new ShopTile(TILE_TYPE.AISLE, 7, 8),       new ShopTile(TILE_TYPE.AISLE, 7, 9),      new ShopTile(TILE_TYPE.AISLE, 7, 10),          new ShopTile(TILE_TYPE.AISLE, 7, 11),      new ShopTile(TILE_TYPE.AISLE, 7, 12),      new ShopTile(TILE_TYPE.AISLE, 7, 13), new ShopTile(TILE_TYPE.AISLE, 7, 14), new ShopTile(TILE_TYPE.AISLE, 7, 15),  new ShelfTile(7, 16, "Carniceria", [4,7]), new ShopTile(TILE_TYPE.WALL, 7, 17),
      new ShopTile(TILE_TYPE.WALL, 8, 0), new ShelfTile(8, 1,"Lácteos", [12,16,18]), new ShopTile(TILE_TYPE.AISLE, 8, 2),   new ShopTile(TILE_TYPE.AISLE, 8, 3),    new ShelfTile(8, 4, "Bebidas Alcohólicas", [8,9,10]),    new ShelfTile(8, 5, "Bebidas Alcohólicas", [10]),   new ShopTile(TILE_TYPE.AISLE, 8, 6),         new ShopTile(TILE_TYPE.AISLE, 8, 7),        new ShelfTile(8, 8, "Verdulería", [2,13]),  new ShelfTile(8, 9, "Frutas", [14]),       new ShopTile(TILE_TYPE.AISLE, 8, 10),          new ShopTile(TILE_TYPE.AISLE, 8, 11),     new ShelfTile(8, 12, "Arroz", [26]),       new ShelfTile(8, 13, "Pastas", [29]), new ShopTile(TILE_TYPE.AISLE, 8, 14), new ShopTile(TILE_TYPE.AISLE, 8, 15),  new ShelfTile(8, 16, "Carniceria", [6,7]), new ShopTile(TILE_TYPE.WALL, 8, 17),
      new ShopTile(TILE_TYPE.WALL, 9, 0), new ShelfTile(9, 1, "Lácteos", [18,19]),      new ShopTile(TILE_TYPE.AISLE, 9, 2),  new ShopTile(TILE_TYPE.AISLE, 9, 3),      new ShelfTile(9, 4, "Bebidas Alcohólicas", [8,9]),   new ShelfTile(9, 5, "Bebidas Alcohólicas", [10]),   new ShopTile(TILE_TYPE.AISLE, 9, 6),         new ShopTile(TILE_TYPE.AISLE, 9, 7),        new ShelfTile(9, 8, "Verdulería", [2,13]),   new ShelfTile(9, 9, "Frutas", [14]),         new ShopTile(TILE_TYPE.AISLE, 9, 10),        new ShopTile(TILE_TYPE.AISLE, 9, 11),    new ShelfTile(9, 12, "Arroz", [26]),       new ShelfTile(9, 13, "Pastas", [29]), new ShopTile(TILE_TYPE.AISLE, 9, 14), new ShopTile(TILE_TYPE.AISLE, 9, 15),   new ShelfTile(9, 16, "Carniceria", [5,7]), new ShopTile(TILE_TYPE.WALL, 9, 17),
      new ShopTile(TILE_TYPE.WALL, 10, 0), new ShelfTile(10, 1, "Lácteos", [18,19]),    new ShopTile(TILE_TYPE.AISLE, 10, 2), new ShopTile(TILE_TYPE.AISLE, 10, 3),   new ShelfTile(10, 4, "Bebidas Alcohólicas", [8,9]),    new ShelfTile(10, 5, "Bebidas N/A", [20,21]),       new ShopTile(TILE_TYPE.AISLE, 10, 6),        new ShopTile(TILE_TYPE.AISLE, 10, 7),        new ShelfTile(10, 8, "Verdulería", [13]),  new ShelfTile(10, 9, "Frutas", [14,15]),       new ShopTile(TILE_TYPE.AISLE, 10, 10),      new ShopTile(TILE_TYPE.AISLE, 10, 11),   new ShelfTile(10, 12, "Arroz", [26]),      new ShelfTile(10, 13, "Pastas", [25,29]), new ShopTile(TILE_TYPE.AISLE, 10, 14), new ShopTile(TILE_TYPE.AISLE, 10, 15),  new ShelfTile(10, 16, "Carniceria", [5,6]), new ShopTile(TILE_TYPE.WALL, 10, 17),
      new ShopTile(TILE_TYPE.WALL, 11, 0), new ShelfTile(11, 1, "Fiambres", [38]),    new ShopTile(TILE_TYPE.AISLE, 11, 2),   new ShopTile(TILE_TYPE.AISLE, 11, 3),   new ShelfTile(11, 4, "Vinos", [39]),                  new ShelfTile(11, 5, "Bebidas N/A", [20,21]),        new ShopTile(TILE_TYPE.AISLE, 11, 6),        new ShopTile(TILE_TYPE.AISLE, 11, 7),       new ShelfTile(11, 8, "Verdulería", [13]),   new ShelfTile(11, 9, "Frutas", [15]),       new ShopTile(TILE_TYPE.AISLE, 11, 10),         new ShopTile(TILE_TYPE.AISLE, 11, 11),    new ShelfTile(11, 12, "Arroz", [26]),      new ShelfTile(11, 13, "Pastas", [25,29]), new ShopTile(TILE_TYPE.AISLE, 11, 14), new ShopTile(TILE_TYPE.AISLE, 11, 15), new ShelfTile(11, 16, "Carniceria", [4,6,7]), new ShopTile(TILE_TYPE.WALL, 11, 17),
      new ShopTile(TILE_TYPE.WALL, 12, 0), new ShelfTile(12, 1, "Fiambres", [38]),    new ShopTile(TILE_TYPE.AISLE, 12, 2), new ShopTile(TILE_TYPE.AISLE, 12, 3),   new ShelfTile(12, 4, "Vinos", [39]),                    new ShelfTile(12, 5, "Bebidas N/A", [21]),           new ShopTile(TILE_TYPE.AISLE, 12, 6),        new ShopTile(TILE_TYPE.AISLE, 12, 7),       new ShelfTile(12, 8, "Verdulería", [2]),  new ShelfTile(12, 9, "Frutas", [15]),       new ShopTile(TILE_TYPE.AISLE, 12, 10),           new ShopTile(TILE_TYPE.AISLE, 12, 11),   new ShelfTile(12, 12, "Arroz", [26]),      new ShelfTile(12, 13, "Pastas", [29]), new ShopTile(TILE_TYPE.AISLE, 12, 14), new ShopTile(TILE_TYPE.AISLE, 12, 15),  new ShelfTile(12, 16, "Carniceria", [4,5,6]), new ShopTile(TILE_TYPE.WALL, 12, 17),
      new ShopTile(TILE_TYPE.WALL, 13, 0), new ShopTile(TILE_TYPE.AISLE, 13, 1),     new ShopTile(TILE_TYPE.AISLE, 13, 2),  new ShopTile(TILE_TYPE.AISLE, 13, 3),    new ShopTile(TILE_TYPE.AISLE, 13, 4),                    new ShopTile(TILE_TYPE.AISLE, 13, 5),               new ShopTile(TILE_TYPE.AISLE, 13, 6),      new ShopTile(TILE_TYPE.AISLE, 13, 7),         new ShopTile(TILE_TYPE.AISLE, 13, 8),    new ShopTile(TILE_TYPE.AISLE, 13, 9),          new ShopTile(TILE_TYPE.AISLE, 13, 10),        new ShopTile(TILE_TYPE.AISLE, 13, 11),  new ShopTile(TILE_TYPE.AISLE, 13, 12),      new ShopTile(TILE_TYPE.AISLE, 13, 13), new ShopTile(TILE_TYPE.AISLE, 13, 14), new ShopTile(TILE_TYPE.AISLE, 13, 15), new ShopTile(TILE_TYPE.AISLE, 13, 16), new ShopTile(TILE_TYPE.WALL, 13, 17),
      new ShopTile(TILE_TYPE.WALL, 14, 0), new ShopTile(TILE_TYPE.AISLE, 14, 1),     new ShopTile(TILE_TYPE.AISLE, 14, 2),  new ShopTile(TILE_TYPE.AISLE, 14, 3),    new ShopTile(TILE_TYPE.AISLE, 14, 4),                    new ShopTile(TILE_TYPE.AISLE, 14, 5),               new ShopTile(TILE_TYPE.AISLE, 14, 6),      new ShopTile(TILE_TYPE.AISLE, 14, 7),      new ShopTile(TILE_TYPE.AISLE, 14, 8),         new ShopTile(TILE_TYPE.AISLE, 14, 9),          new ShopTile(TILE_TYPE.AISLE, 14, 10),      new ShopTile(TILE_TYPE.AISLE, 14, 11),  new ShopTile(TILE_TYPE.AISLE, 14, 12),      new ShopTile(TILE_TYPE.AISLE, 14, 13), new ShopTile(TILE_TYPE.AISLE, 14, 14), new ShopTile(TILE_TYPE.AISLE, 14, 15), new ShopTile(TILE_TYPE.AISLE, 14, 16), new ShopTile(TILE_TYPE.WALL, 14, 17),
      new ShopTile(TILE_TYPE.WALL, 15, 0), new ShopTile(TILE_TYPE.AISLE, 15, 1),     new ShopTile(TILE_TYPE.AISLE, 15, 2),  new ShopTile(TILE_TYPE.AISLE, 15, 3),    new ShopTile(TILE_TYPE.REG, 15, 4),                    new ShopTile(TILE_TYPE.AISLE, 15, 5),                 new ShopTile(TILE_TYPE.AISLE, 15, 6),      new ShopTile(TILE_TYPE.REG, 15, 7),          new ShopTile(TILE_TYPE.AISLE, 15, 8),       new ShopTile(TILE_TYPE.AISLE, 15, 9),          new ShopTile(TILE_TYPE.REG, 15, 10),        new ShopTile(TILE_TYPE.AISLE, 15, 11),   new ShopTile(TILE_TYPE.AISLE, 15, 12),     new ShopTile(TILE_TYPE.REG, 15, 13), new ShopTile(TILE_TYPE.AISLE, 15, 14), new ShopTile(TILE_TYPE.AISLE, 15, 15), new ShopTile(TILE_TYPE.AISLE, 15, 16), new ShopTile(TILE_TYPE.WALL, 15, 17),
      new ShopTile(TILE_TYPE.WALL, 16, 0), new ShopTile(TILE_TYPE.AISLE, 16, 1),     new ShopTile(TILE_TYPE.AISLE, 16, 2),  new ShopTile(TILE_TYPE.AISLE, 16, 3),    new ShopTile(TILE_TYPE.AISLE, 16, 4),                    new ShopTile(TILE_TYPE.AISLE, 16, 5),               new ShopTile(TILE_TYPE.AISLE, 16, 6),      new ShopTile(TILE_TYPE.AISLE, 16, 7),      new ShopTile(TILE_TYPE.AISLE, 16, 8),       new ShopTile(TILE_TYPE.AISLE, 16, 9),          new ShopTile(TILE_TYPE.AISLE, 15, 10),        new ShopTile(TILE_TYPE.AISLE, 16, 11),  new ShopTile(TILE_TYPE.AISLE, 16, 12),      new ShopTile(TILE_TYPE.AISLE, 16, 13), new ShopTile(TILE_TYPE.AISLE, 16, 14), new ShopTile(TILE_TYPE.AISLE, 16, 15), new ShopTile(TILE_TYPE.AISLE, 16, 16), new ShopTile(TILE_TYPE.WALL, 16, 17),
      new ShopTile(TILE_TYPE.WALL, 17, 0), new ShopTile(TILE_TYPE.WALL, 17, 1),     new ShopTile(TILE_TYPE.WALL, 17, 2),    new ShopTile(TILE_TYPE.WALL, 17, 3),    new ShopTile(TILE_TYPE.WALL, 17, 4),                    new ShopTile(TILE_TYPE.EE, 17, 5),                 new ShopTile(TILE_TYPE.WALL, 17, 6),         new ShopTile(TILE_TYPE.WALL, 17, 7),          new ShopTile(TILE_TYPE.WALL, 17, 8),      new ShopTile(TILE_TYPE.WALL, 17, 9),          new ShopTile(TILE_TYPE.WALL, 17, 10),          new ShopTile(TILE_TYPE.WALL, 17, 11),  new ShopTile(TILE_TYPE.EE, 17, 12),          new ShopTile(TILE_TYPE.WALL, 17, 13), new ShopTile(TILE_TYPE.WALL, 17, 14), new ShopTile(TILE_TYPE.WALL, 17, 15), new ShopTile(TILE_TYPE.WALL, 17, 16), new ShopTile(TILE_TYPE.WALL, 17, 17)
    ],
    products: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
    rows: 18,
    columns: 18
  },
  
  ]);

  return (
    <InterfaceController
      productList={productList}
      setProductList={setProductList}
      shoppingLists={shoppingLists}
      setShoppingLists={setShoppingLists}
      currentList={currentList}
      setCurrentList={setCurrentList}
      shoppings={shoppings}
      setShoppings={setShoppings}
      imageMap={imageMap}
      setImageMap={setImageMap}
    />
  );
}

export default App;
