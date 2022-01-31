import { Component, OnInit } from '@angular/core';
import { LogEntriesToKeep } from '../../../core/services/role-log-monitor.service';

/**
 * Displays the system status.
 *
 * @author Lennart Altenhof
 */
@Component({
  selector: 'app-app-system-status-view',
  templateUrl: './app-system-status-view.component.html',
  styleUrls: ['./app-system-status-view.component.scss'],
})
export class AppSystemStatusView implements OnInit {

  logEntriesToKeep = LogEntriesToKeep;
  isLogAutoscrollEnabled = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
