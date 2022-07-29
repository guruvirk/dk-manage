import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { RoleService } from './role.service';
import { Observable } from 'rxjs';
import { UxService } from './ux.service';
import { Order } from './models';
import { Page } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _api: GenericService<Order>;

  constructor(private http: HttpClient,
    private roleService: RoleService,
    private uxService: UxService) {
    this._api = new GenericService(this.http, this.roleService, this.uxService);
  }

  update(id: string, order): Observable<Order> {
    return this._api.update(`orders/${id}`, order)
  }

  get(id): Observable<Order> {
    return this._api.get(`orders/${id}`)
  }

  search(query): Observable<Page<Order>> {
    return this._api.search(`orders`, query)
  }

}
