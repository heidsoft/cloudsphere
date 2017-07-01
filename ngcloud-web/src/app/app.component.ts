import {Component} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent  {
  name = "world";
  closeMessage: string = "";
  indeterminateState: boolean = true;

  onClose(): void {
    this.closeMessage = "The alert has been closed";
  }

  rootDirectory: any[] = [
    {
      name: "Applications",
      icon: "folder",
      expanded: true,
      files: [
        {
          icon: "calendar",
          name: "Calendar",
          active: true
        },
        {
          icon: "line-chart",
          name: "Charts",
          active: false
        },
        {
          icon: "dashboard",
          name: "Dashboard",
          active: false
        },
        {
          icon: "map",
          name: "Maps",
          active: false
        },
      ]
    },
    {
      name: "Files",
      icon: "folder",
      expanded: false,
      files: [
        {
          icon: "file",
          name: "Cover Letter.doc",
          active: false
        },
      ]
    },
    {
      name: "Images",
      icon: "folder",
      expanded: false,
      files: [
        {
          icon: "image",
          name: "Screenshot.png",
          active: false
        },
      ]
    }
  ];

  users: any[];
  selected: any[] = [];
  toAdd: any[] = [];
  toDelete: any[] = [];
  toEdit: any;

  constructor() {
    this.users = [
      { name: "alice" },
      { name: "bob" },
      { name: "carol" },
    ];
  }

  onDelete() {
    this.toDelete = this.selected.slice();
    return false;
  }

  onEdit() {
    this.toEdit = this.selected[0];
    return false;
  }

  onAdd() {
    this.toAdd = this.selected.slice();
  }

  //打开文件
  openFile(directoryName: string, fileName: string) {
    console.log("directoryName",directoryName);
    console.log("fileName",fileName);
  }


}





