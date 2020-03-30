import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string;
  activeRouteSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(this.activatedRoute);
    // this.id = this.activatedRoute.snapshot.params.id;
   }

  ngOnInit(): void {
    this.activeRouteSubscription = this.activatedRoute.params.subscribe(
                                      (params: any) => {
                                        this.id = params.id;
                                      }
                                    );
  }

  ngOnDestroy() {
    this.activeRouteSubscription.unsubscribe();
  }

}
