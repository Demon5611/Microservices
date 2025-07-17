// src/app/spa-host/spa-host.component.ts
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleSpaService } from '../../single-spa/single-spa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spa-host',
  template: `<div #appContainer></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaHostComponent implements OnInit {
  @ViewChild('appContainer', { static: true }) appContainer: ElementRef;

  // Сделаем публичным
  public appName: string;

  constructor(
    private route: ActivatedRoute,
    private singleSpa: SingleSpaService
  ) {}

  ngOnInit() {
    this.appName = this.route.snapshot.data.app;
    this.singleSpa
      .mount(this.appName, this.appContainer.nativeElement)
      .subscribe();
  }

  // Добавим метод unmount
  public unmount(): Observable<unknown> {
    return this.singleSpa.unmount(this.appName);
  }
}
