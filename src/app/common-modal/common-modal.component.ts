import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss']
})
export class CommonModalComponent implements OnInit {

  @Input() displayModel: any;
  @Input() modalData: any;
  @Output() isCloseModel = new EventEmitter<any>();
  projectDesc: any = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.modalData['description']) {
      this.projectDesc = this.sanitizer.bypassSecurityTrustHtml(this.modalData['description']);
    }
  }

  onCloseHandled() {
    this.displayModel = "none";
    this.isCloseModel.emit({ displayModel: 'none' });
  }

}
