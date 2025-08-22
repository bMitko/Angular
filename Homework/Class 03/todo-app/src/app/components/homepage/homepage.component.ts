import { Component } from "@angular/core";
import { RouterLink } from "@angular/router"

@Component({
    selector: 'homepage',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
   
})

export class HomePage {}