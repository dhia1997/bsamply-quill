import QuillType from 'quill2';
import { QuillModules } from './quill-editor.interfaces';
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges, NgZone, OnDestroy } from '@angular/core';
import { CustomOption, CustomModule } from './quill-editor.interfaces';
import { QuillService } from './quill.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class QuillViewComponent implements AfterViewInit, OnChanges, OnDestroy {
    elementRef: ElementRef;
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected service: QuillService;
    protected domSanitizer: DomSanitizer;
    protected platformId: any;
    format?: 'object' | 'html' | 'text' | 'json';
    theme?: string;
    modules?: QuillModules;
    debug?: 'warn' | 'log' | 'error' | false;
    formats?: string[] | null;
    sanitize?: boolean;
    strict: boolean;
    content: any;
    customModules: CustomModule[];
    customOptions: CustomOption[];
    preserveWhitespace: boolean;
    onEditorCreated: EventEmitter<any>;
    quillEditor: QuillType;
    editorElem: HTMLElement;
    private quillSubscription;
    constructor(elementRef: ElementRef, renderer: Renderer2, zone: NgZone, service: QuillService, domSanitizer: DomSanitizer, platformId: any);
    valueSetter: (quillEditor: any, value: any) => any;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuillViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuillViewComponent, "quill-view", never, { "format": "format"; "theme": "theme"; "modules": "modules"; "debug": "debug"; "formats": "formats"; "sanitize": "sanitize"; "strict": "strict"; "content": "content"; "customModules": "customModules"; "customOptions": "customOptions"; "preserveWhitespace": "preserveWhitespace"; }, { "onEditorCreated": "onEditorCreated"; }, never, never>;
}
