import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import {MatSelectModule} from '@angular/material/select';

// Http Service
import { HttpService } from './services/http.service';

// Http Client Service
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
