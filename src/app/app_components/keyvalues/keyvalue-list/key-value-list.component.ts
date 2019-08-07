import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {KeyValue} from '@app/app_models/keyValue';
import {Router} from '@angular/router';
import {KeyValuesService} from '@app/app_services/key-values.service';
import {AuthenticationService} from '@app/app_services';
import {User} from '@app/app_models';

@Component({
  selector: 'app-keyvalue-list',
  templateUrl: './key-value-list.component.html',
  styleUrls: ['./key-value-list.component.css']
})
export class KeyValueListComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  keyValuesList: Observable<KeyValue[]>;
  ckeConfig: any;
  currentUser: User;
  currentUserSubscription: Subscription;
  keyValueTableHeader: string [] = ['Actions', 'Key', 'Value'];

  constructor(private keyValuesService: KeyValuesService,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

  }

  ngOnInit() {
    this.reLoadData();
    this.ckeConfig = {
      forcePasteAsPlainText: true,
      font_names: 'Arial;Times New Roman;Verdana',
      toolbarGroups: [
        {name: 'document', groups: ['mode', 'document', 'doctools']},
        {name: 'clipboard', groups: ['clipboard', 'undo']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
        {name: 'forms', groups: ['forms']},
        '/',
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
        {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
        {name: 'links', groups: ['links']},
        {name: 'insert', groups: ['insert']},
        '/',
        {name: 'styles', groups: ['styles']},
        {name: 'colors', groups: ['colors']},
        {name: 'tools', groups: ['tools']},
        {name: 'others', groups: ['others']},
        {name: 'about', groups: ['about']}
      ],
      removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About',
      extraPlugins: 'divarea'
    };
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  reLoadData() {
    this.keyValuesList = this.keyValuesService.getAllKeyValue(this.currentUser.id);
  }

  navigateToKeyValueDetails(keyValue: KeyValue) {
    this.router.navigate(['/kv-edit', keyValue.id]);
  }

  deleteKeyValue(keyValue: KeyValue) {
    if (confirm('Are you sure to delete ' + keyValue.keyName)) {
      this.subscription = this.keyValuesService.deleteKeyValue(keyValue).subscribe(
        data => {
          this.reLoadData();
        },
        error => {
          console.log(error);
        });
    }
  }
}
