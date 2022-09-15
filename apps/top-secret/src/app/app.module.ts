import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Ability, PureAbility } from '@casl/ability';
import { AbilityModule } from '@casl/angular';

import { AuthInterceptor, AuthModule, tokenVar } from '@ts/auth';
import { Environment } from '@ts/common';
import { GraphQLModule } from '@ts/graphql';
import { possibleTypes, typePolicies } from '@ts/graphql/client';
import { LayoutModule } from '@ts/layout';
import { MainModule } from '@ts/main';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    AbilityModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot([]),
    AuthModule,
    LayoutModule,
    MainModule,
    GraphQLModule.forRoot({
      cacheOptions: {
        possibleTypes,
        typePolicies,
      },
      batchOptions: {
        uri: environment.url.graphql,
        batchMax: 250,
      },
      uploadOptions: {
        uri: environment.url.graphql,
        mutationNames: ['SampleUpload', 'SampleUploadMany'],
        headers: { 'Apollo-Require-Preflight': 'true' },
        fetch: (input, init) => {
          (<any>init).headers.Authorization = 'Bearer ' + tokenVar();
          return fetch(input, init);
        },
      },
      websocketOptions: {
        url: environment.url.graphqlSubscriptions,
        connectionParams: () => ({ token: tokenVar() }),
        shouldRetry: () => true,
        retryAttempts: Infinity,
      },
    }),
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: Environment, useValue: environment },
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
