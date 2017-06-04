import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    template: "<h1>{{WelcomeMessage}}</h1>"
})

export class AppComponent {
WelcomeMessage: string = "Welcome to my site"
}