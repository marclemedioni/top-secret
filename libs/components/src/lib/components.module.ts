import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ConfirmComponent } from './confirm/confirm.component';
import { LoadingComponent } from './loading/loading.component';
import { SnackbarErrorService } from './snackbar-error/snackbar-error.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  declarations: [ConfirmComponent, LoadingComponent],
  exports: [ConfirmComponent, LoadingComponent],
  providers: [SnackbarErrorService],
})
export class ComponentsModule {}
