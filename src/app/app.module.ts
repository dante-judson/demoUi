import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModel,FormsModule } from '@angular/forms';
import {ToolbarModule,MenuModule,MenuItem,ButtonModule,InputTextModule,PanelModule,InputSwitchModule,InputMaskModule,
  DataTableModule,SharedModule,GrowlModule,ConfirmDialogModule,ConfirmationService,ChartModule } from 'primeng/primeng';
import {HttpClientModule} from '@angular/common/http';
import {ContatoServiceService} from './services/contato-service.service';
import {RelatorioService} from './services/relatorio.service';


import { AppComponent } from './app.component';
import { CadatroContatoComponent } from './cadatro-contato/cadatro-contato.component';
import { ListaContatoComponent } from './lista-contato/lista-contato.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditaContatoComponent } from './edita-contato/edita-contato.component';
import { RelatorioComponent } from './relatorio/relatorio.component';

@NgModule({
  declarations: [
    AppComponent,
    CadatroContatoComponent,
    ListaContatoComponent,
    ToolbarComponent,
    EditaContatoComponent,
    RelatorioComponent
  ],
  imports: [
    ConfirmDialogModule,
    GrowlModule,
    HttpClientModule,
    DataTableModule,
    SharedModule,
    FormsModule,
    InputMaskModule,
    InputSwitchModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    ToolbarModule,
    BrowserAnimationsModule,
    BrowserModule,
    ChartModule,
    RouterModule.forRoot([
      {
        path:'listar',
        component:ListaContatoComponent
      },
      {
        path:'cadastrar',
        component:CadatroContatoComponent
      },
      {
        path:'editar',
        component:EditaContatoComponent
      },
      {
        path:'relatorio',
        component:RelatorioComponent
      }
    ])
  ],
  providers: [ContatoServiceService,ConfirmationService,RelatorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
