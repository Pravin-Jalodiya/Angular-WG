import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizListComponent,
    DashboardComponent,
    QuizComponent,
    CreateQuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
