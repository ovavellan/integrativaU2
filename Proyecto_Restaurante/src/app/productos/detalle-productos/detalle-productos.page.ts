import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../productos.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  public datos = {}

  constructor(public Servicio : ProductosService, public activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( p =>{
      console.log(p.get('productoID'))

      this.datos = this.Servicio.getProductosById(p.get('productoID'))

      console.log(this.datos)
    })
  }

}
