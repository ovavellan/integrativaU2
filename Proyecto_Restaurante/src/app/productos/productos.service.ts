import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos = [
    {
      id: '1',
      titulo:'Hamburguesa',
      url: "https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg",
      comentarios: ["Deliciosa hamburguesa", "Doble Carne"]
    },

    {
      id: '2',
      titulo:'Pizza',
      url: "https://www.saborusa.com/do/wp-content/uploads/sites/8/2019/11/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png",
      comentarios: ["Deliciosa Pizza de 4 estaciones"]
    },

    {
      id: '3',
      titulo:'Hot Dog',
      url: "https://www.maxionline.ec/wp-content/uploads/2021/05/hot-dog-chile-menu.jpg",
      comentarios: ["Deliciosa Hot Dog Americano"]
    },

    {
      id: '4',
      titulo:'Alitas Picantes',
      url: "https://images.hola.com/imagenes/cocina/recetas/20200205159814/alitas-de-pollo-a-la-americana-buffalo-wings/0-778-671/aitas-de-pollo-a-la-americana-o-buffalo-wings-t.jpg",
      comentarios: ["Deliciosa Alitas Picantes"]
    },

    {
      id: '5',
      titulo:'Papas Fritas',
      url: "https://scm-assets.constant.co/scm/unilever/2bb5223be0548fcc55c230aa5f951219/84b57886-fee2-4f98-8920-027f8afd654c.png",
      comentarios: ["Deliciosas Papas fritas"]
    },

    {
      id: '6',
      titulo:'Pizza de champiñones',
      url: "https://static.guiainfantil.com/pictures/recetas/4797-4-pizza-vegetal-de-champinones-y-esparragos-trigueros.jpg",
      comentarios: ["Deliciosas pizza de champiñones y pepperoni"]
    },

    {
      id: '7',
      titulo:'Western Bacon Doble',
      url: "https://file.adomicil.io/carlsjr.adomicil.io/_files/images/product/burgers04doublewesternbaconchesseburgercombo-0641235177703777.jpg",
      comentarios: ["Deliciosas Papas fritas"]
    },

    {
      id: '8',
      titulo:'Shawarma',
      url: "https://www.comedera.com/wp-content/uploads/2022/03/Shawarma-de-cordero-shutterstock_1662680437.jpg",
      comentarios: ["Delicioso Shawarma"]
    },

    {
      id: '9',
      titulo:'Tacos',
      url: "https://www.pequerecetas.com/wp-content/uploads/2020/10/tacos-mexicanos.jpg",
      comentarios: ["Deliciosos tacos Mexicanos"]
    },

    {
      id: '10',
      titulo:'Churros',
      url: "https://www.hogarmania.com/archivos/202110/como-hacer-churros-caseros-sin-churrera-receta-1280x720x80xX.jpg",
      comentarios: ["Deliciosos Churros"]
    }
  ];

  constructor() { }

    //listar
    getProductos(){
      return [...this.productos]  
    }
  
    //Agregar
    addProductos(titulo: string, url : string, comentarios: string[]){
      this.productos.push(
        {
          id: this.productos.length + 1 + "",
          titulo: titulo,
          url: url,
          comentarios: comentarios
        }
      )
    }
  
    //eliminar
    deleteProductos(productoID: string){
      this.productos = this.productos.filter(p => {
        return p.id !==productoID
      })
    }
  
    //buscar por id
    getProductosById(productoID: string ){
      return{
        ...this.productos.find(p => {
          return p.id == productoID
        })
      }
    }
}
