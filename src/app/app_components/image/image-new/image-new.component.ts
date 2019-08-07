import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-image-new',
  templateUrl: './image-new.component.html',
  styleUrls: ['./image-new.component.css']
})
export class ImageNewComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  @ViewChild('imageInput') imageInput: ElementRef;
  uploader: FileUploader;
  isDropOver: boolean;

  ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'}];
    this.uploader = new FileUploader({
      url: 'demo-image/create',
      autoUpload: true,
      headers: headers,
    });
    this.uploader.onCompleteAll = () => alert('Image File uploaded');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }

  fileClicked() {
    this.imageInput.nativeElement.click();
  }
}
