import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  public datos:any;
  public idProducto:any;

  constructor(public Servicio : ProductosService, public activatedRoute : ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( p =>{
      console.log(p.get('productoID'))
      this.idProducto = p.get('productoID')

      this.datos = this.Servicio.getProductosById(this.idProducto)

      console.log(this.datos)
    })
  }
  eliminarProducto(){
    this.Servicio.deleteProductos(this.idProducto)
    this.router.navigate(['/productos'])
  }

}
