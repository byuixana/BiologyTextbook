/**
 * A custom TreeItem component that extends MUI's TreeItem.
 *
 * @typedef {object} TreeItemProps
 * @property {string} itemId - The unique identifier for the tree item
 * @property {string} label - The label text to display
 * @property {Array} [children] - Optional child items
 * @property {object} [sx] - MUI sx prop for styling. Lets you access the dom to customize a MUI component.
 *
 * @param {TreeItemProps} itemProps - Props passed to the TreeItem component
 * @param {React.Ref} ref - Forwarded ref to the TreeItem
 * @returns {JSX.Element} A TreeItem component
 */

import { TreeItem } from '@mui/x-tree-view/TreeItem';
import * as React from 'react';
import { useTreeItemModel } from '@mui/x-tree-view/hooks';

const SectionTreeItem = React.forwardRef(function SectionTreeItem(itemProps, ref) {
    const { headerItemIds = [], ...treeItemProps } = itemProps;
    const isHeader = Array.isArray(headerItemIds) && headerItemIds.includes(String(itemProps.itemId));
    const item = useTreeItemModel(itemProps.itemId);
    const itemType = String(item?.type ?? '').toLowerCase();
    const isNone = itemType === 'none';
    const hasChildren = item?.children?.length > 0;
    const pageLink = item?.child_items?.[0]?.page;
    const hasExternalPage = typeof pageLink === 'string' && pageLink.trim() !== '' && pageLink !== 'LINK HERE';

    return (
        <TreeItem className = "item"
        {...treeItemProps}
        ref = {ref}
        sx = {{
            width:"100%",
            color: 'white',
            '& > .MuiTreeItem-content.Mui-selected, & > .MuiTreeItem-content.Mui-selected:hover, & > .MuiTreeItem-content.Mui-selected.Mui-focused': {
                backgroundColor: '#bfdbfe !important',
                color: '#1a5e80 !important',
            },
            ...(isHeader && {
                '& > .MuiTreeItem-content': {
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    color: '#002366',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    margin: '4px 8px',
                    width: 'calc(100% - 16px)',
                }
            }),
            ...(isNone && !hasChildren && !hasExternalPage && {
                '& > .MuiTreeItem-content': {
                    pointerEvents: 'none',
                    cursor: 'default',
                    backgroundColor: 'transparent !important',
                    color: 'white !important',
                },
                '& > .MuiTreeItem-content:hover, & > .MuiTreeItem-content.Mui-focused, & > .MuiTreeItem-content:active, & > .MuiTreeItem-content.Mui-selected, & > .MuiTreeItem-content.Mui-selected:hover': {
                    backgroundColor: 'transparent !important',
                    color: 'white !important',
                }
            }),
            ...(isNone && hasChildren && !hasExternalPage && {
                '& > .MuiTreeItem-content': {
                    cursor: 'default',
                },
                '& > .MuiTreeItem-content .MuiTreeItem-label': {
                    pointerEvents: 'none',
                    cursor: 'default',
                }
            }),
            ...(isNone && hasExternalPage && {
                '& > .MuiTreeItem-content, & > .MuiTreeItem-content .MuiTreeItem-label': {
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                }
            }),
            ...(isNone && {
                '& > .MuiTreeItem-content:hover, & > .MuiTreeItem-content.Mui-focused': {
                    backgroundColor: 'transparent !important',
                }
            })
        }}
        slotProps={{
        }}
        />
    )
} )

export default SectionTreeItem;
