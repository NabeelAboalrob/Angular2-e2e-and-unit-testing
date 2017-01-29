import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { autoFill }             from './autoFillData/autoFill.service'
import { autoFillComponent }    from './autoFillData/autoFill.component';
import { qualItFormComponent }  from './QualItForm/qualItForm.component';
import { previewDataComponent } from './PreviewData/previewData.component';
import { appComponent }         from './app.component';

//Preview data table routes
const appRoutes: Routes = [
  { path: 'previewData', component: previewDataComponent },

];


@NgModule({
  declarations: [
    appComponent, qualItFormComponent, autoFillComponent, previewDataComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [autoFill],
  bootstrap: [qualItFormComponent, autoFillComponent]
  
})

export class AppModule { }

