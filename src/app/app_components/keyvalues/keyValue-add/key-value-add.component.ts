import {Component, OnDestroy, OnInit} from '@angular/core';
import {KeyValue} from '@app/app_models/keyValue';
import {Router} from '@angular/router';
import {KeyValuesService} from '@app/app_services/key-values.service';
import {AuthenticationService} from '@app/app_services';
import {Subscription} from 'rxjs';
import {User} from '@app/app_models';

@Component({
  selector: 'app-keyvalue-add',
  templateUrl: './key-value-add.component.html',
  styleUrls: ['./key-value-add.component.css']
})
export class KeyValueAddComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  keyValues: KeyValue;
  ckeConfig: any;
  submitted: boolean;
  currentUser: User;
  currentUserSubscription: Subscription;


  constructor(private keyValueService: KeyValuesService,
              private authenticationService: AuthenticationService,
              private router: Router) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    // this.newKeyValue();
  }

  newKeyValue(): void {
    this.submitted = false;
    this.keyValues = new KeyValue();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.submitted = true;
    this.newKeyValue();
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
      extraPlugins: 'divarea',
      removeButtons: 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Maximize,ShowBlocks,About'
    };
  }

  save() {
    this.keyValues.userId = this.currentUser.id;
    this.subscription = this.keyValueService.addKeyValue(this.keyValues)
      .subscribe(data => {
          this.router.navigate(['/kv-list']);
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
