import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconComponent } from './components/icon/icon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, IconComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [SidebarComponent],
})
export class ShellModule { }
