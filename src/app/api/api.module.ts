import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Test Comment
const components = [];

@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: components,
  exports: components,
  providers: []
})
export class ApiModule {}
