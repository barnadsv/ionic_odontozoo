import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { FrenteComponent } from './frente/frente.component';
import { FrenteFormComponent } from './frente-form/frente-form.component';
//import { DentesComponentsModule } from './dentes/dentes.components.module';
import { Dente101Component } from './dentes/dente101/dente101.component';
import { Dente201Component } from './dentes/dente201/dente201.component';
// import { RegistroFormComponent } from './registro-form/registro-form.component';
// import { ContatoItemComponent } from './contatos/contato-list/contato-item/contato-item.component';
// import { ContatoListComponent } from './contatos/contato-list/contato-list.component';
// import { ContatoSearchComponent } from './contatos/contato-search/contato-search.component';
// import { ContatosComponent } from './contatos/contatos.component';
// import { HeaderComponent } from './header/header.component';
// import { FeedEditComponent } from './feeds/feed-edit/feed-edit.component';
// import { FeedItemComponent } from './feeds/feed-list/feed-item/feed-item.component';
// import { FeedListComponent } from './feeds/feed-list/feed-list.component';
// import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';
// import { FeedsComponent } from './feeds/feeds.component';

@NgModule({
    declarations: [
        FrenteComponent,
        FrenteFormComponent,
        Dente101Component,
        Dente201Component
        // RegistroFormComponent,
        // ContatoItemComponent,
        // ContatoListComponent,
        // ContatoSearchComponent,
        // // ContatosComponent,
        // // HeaderComponent,
        // FeedEditComponent,
        // FeedItemComponent,
        // FeedListComponent,
        // // FeedsComponent
        // PerfilEditComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        FrenteComponent,
        FrenteFormComponent,
        Dente101Component,
        Dente201Component
        // RegistroFormComponent,
        // ContatoItemComponent,
        // ContatoListComponent,
        // ContatoSearchComponent,
        // // ContatosComponent,
        // // HeaderComponent,
        // FeedEditComponent,
        // FeedItemComponent,
        // FeedListComponent,
        // // FeedsComponent
        // PerfilEditComponent
    ]
})

export class ComponentsModule {

}