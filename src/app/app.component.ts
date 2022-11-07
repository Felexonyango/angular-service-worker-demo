import { Component } from '@angular/core';
import { SwPush,SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service-worker';
   joke:any
  update:boolean=false;

constructor(updates: SwUpdate,
  private data:DataService
  ){
  updates.versionUpdates.subscribe(event=>{
    updates.activateUpdate().then(()=>document.location.reload())
  })
}

ngOnInit() {
  this.data.gimmejokes().subscribe(res=>{
     this.joke=res
  })
}
}
