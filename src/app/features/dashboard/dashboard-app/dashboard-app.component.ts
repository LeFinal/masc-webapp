import { Component, Input } from '@angular/core';

/**
 * App in the dashboard.
 *
 * @author Lennart Altenhof
 * @version 1.0
 */
@Component({
  selector: 'app-dashboard-app',
  templateUrl: './dashboard-app.component.html',
  styleUrls: ['./dashboard-app.component.scss'],
})
export class DashboardAppComponent {
  /**
   * Displayed title.
   */
  @Input() title?: string;
  /**
   * Optional description.
   */
  @Input() description?: string;
  /**
   * Large icon.
   */
  @Input() icon?: string;
}
