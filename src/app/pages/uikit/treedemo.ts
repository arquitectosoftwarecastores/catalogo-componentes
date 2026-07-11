import { Component, inject, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeModule } from 'primeng/tree';
import { FormsModule } from '@angular/forms';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';
import { NodeService } from '../service/node.service';

@Component({
    selector: 'app-tree-demo',
    standalone: true,
    imports: [CommonModule, FormsModule, TreeModule, TreeTableModule],
    templateUrl: './treedemo.html',
    providers: [NodeService]
})
export class TreeDemo implements OnInit {
    treeValue: TreeNode[] = [];

    treeTableValue: TreeNode[] = [];

    selectedTreeValue: TreeNode[] = [];

    selectedTreeTableValue = {};

    cols: { field: string; header: string }[] = [];

    nodeService = inject(NodeService);

    ngOnInit() {
        this.nodeService.getFiles().then((files) => (this.treeValue = files));
        this.nodeService.getTreeTableNodes().then((files: TreeNode[]) => (this.treeTableValue = files));

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectedTreeTableValue = {};
    }
}
