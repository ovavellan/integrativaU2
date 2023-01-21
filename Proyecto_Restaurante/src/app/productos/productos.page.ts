import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

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

  constructor(public Servicio: ProductosService) { }

  ngOnInit() {
    this.productos = this.Servicio.getProductos()
  }
  ionViewWillEnter(){
    this.productos = this.Servicio.getProductos()
   
  }

}
