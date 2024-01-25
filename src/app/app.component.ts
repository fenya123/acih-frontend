import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.style.scss"],
})
export class AppComponent {
}
