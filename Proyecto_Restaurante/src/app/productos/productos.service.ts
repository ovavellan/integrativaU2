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
