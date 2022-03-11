import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as _components from './components';

@NgModule({
  declarations: [_components.IconComponent],
  imports: [CommonModule],
  exports: [_components.IconComponent],
})
export class SharedModule {}
