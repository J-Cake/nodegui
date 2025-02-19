import addon from '../utils/addon';
import { NodeWidget, QWidgetSignals } from './QWidget';
import { NativeElement } from '../core/Component';
import { SizeAdjustPolicy } from '../QtEnums';
import { QIcon } from '../QtGui/QIcon';
import { QVariant } from '../QtCore/QVariant';
import { QStandardItemModel } from './QStandardItemModel';

/**
 
> Create and control a selectable drop down menu.

* **This class is a JS wrapper around Qt's [QComboBox class](https://doc.qt.io/qt-5/qcombobox.html)**

A `QComboBox` provides a means of presenting a list of options to the user.

### Example

```javascript
const { QComboBox } = require("@nodegui/nodegui");

const comboBox = new QComboBox();
comboBox.addItem(undefined, 'comboBox item 0');
comboBox.addItem(undefined, 'comboBox item 1');
comboBox.addItem(undefined, 'comboBox item 2');
comboBox.addItem(undefined, 'comboBox item 3');

comboBox.addEventListener('currentTextChanged', (text) => {
    console.log('currentTextChanged: ' + text);
});

comboBox.addEventListener('currentIndexChanged', (index) => {
    console.log('currentIndexChanged: ' + index);
});
```
 */
export class QComboBox extends NodeWidget<QComboBoxSignals> {
    native: NativeElement;
    constructor();
    constructor(parent: NodeWidget<any>);
    constructor(parent?: NodeWidget<any>) {
        let native;
        if (parent) {
            native = new addon.QComboBox(parent.native);
        } else {
            native = new addon.QComboBox();
        }
        super(native);
        this.native = native;
        this.setNodeParent(parent);
    }
    addItem(icon: QIcon | undefined, text: string, userData: QVariant = new QVariant()): void {
        if (icon) {
            this.native.addItem(icon.native, text, userData.native);
        } else {
            this.native.addItem(text, userData.native);
        }
    }
    insertItem(index: number, icon: QIcon | undefined, text: string, userData: QVariant = new QVariant()): void {
        if (icon) {
            this.native.insertItem(index, icon.native, text, userData.native);
        } else {
            this.native.insertItem(index, text, userData.native);
        }
    }
    addItems(texts: string[]): void {
        this.native.addItems(texts);
    }
    insertItems(index: number, texts: string[]): void {
        this.native.insertItems(index, texts);
    }
    currentIndex(): number {
        return this.native.currentIndex();
    }
    currentText(): string {
        return this.native.currentText();
    }
    insertSeparator(index: number): void {
        this.native.insertSeparator(index);
    }
    itemText(index: number): string {
        return this.native.itemText(index);
    }
    itemData(index: number): QVariant {
        return new QVariant(this.native.itemData(index));
    }
    removeItem(index: number): void {
        this.native.removeItem(index);
    }
    sizeAdjustPolicy(): number {
        return this.native.sizeAdjustPolicy();
    }
    setSizeAdjustPolicy(policy: SizeAdjustPolicy): void {
        this.native.setSizeAdjustPolicy(policy);
    }
    maxVisibleItems(): number {
        return this.native.maxVisibleItems();
    }
    setMaxVisibleItems(index: number): void {
        this.native.setMaxVisibleItems(index);
    }
    isEditable(): boolean {
        return this.native.isEditable();
    }
    setEditable(editable: boolean): void {
        this.native.setEditable(editable);
    }
    clear(): void {
        this.native.clear();
    }
    setCurrentText(text: string): void {
        this.setProperty('currentText', text);
    }
    setCurrentIndex(index: number): void {
        this.setProperty('currentIndex', index);
    }
    setModel(model: QStandardItemModel): void {
        this.native.setModel(model.native);
    }
    setEditText(text: string): void {
        this.native.setEditText(text);
    }
}

export enum InsertPolicy {
    NoInsert,
    InsertAtTop,
    InsertAtCurrent,
    InsertAtBottom,
    InsertAfterCurrent,
    InsertBeforeCurrent,
    InsertAlphabetically,
}

export interface QComboBoxSignals extends QWidgetSignals {
    //List all Signals below
    currentIndexChanged: (index: number) => void;
    currentTextChanged: (text: string) => void;
    editTextChanged: (text: string) => void;
}
