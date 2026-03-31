/**
 * A component that displays a tree view of section items for navigation.
 *
 * @typedef {object} SectionTreeProps
 * @property {Array<object>} data - Array of section items with id and children properties
 * @property {string} section - The section label to display
 * @returns {JSX.Element} A tree view component for section navigation
 */

import { useSelectionContext } from '../context/SelectionContext';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'
import {useState} from 'react'
import SectionTreeItem from './SectionTreeItem';

export default function SectionTreeView({data, section}) {
    // Hooks
    const { selectedItem, setSelected } = useSelectionContext();

    //Helpers
    const createMap = (data, map = {}) => {

        data.forEach( item => {
            map[item.id] = item;
            
            if (item.children && item.children.length > 0){
                createMap(item.children, map);
            }
        });
        return map;
    }

    const convertIdsToStrings = (items) => {
        return items.map(item => ({
            ...item,
            id: String(item.id),
            children: item.children ? convertIdsToStrings(item.children) : []
        }));
    }

    function findItem(id, map){
        const selectedItem = map[id]
        return selectedItem
    }

    // In-component variable

    const map = createMap(data);
    const stringIdData = convertIdsToStrings(data);
    const headerItemIds = data?.length ? [String(data[0].id)] : [];

    return <div className = "container">
<RichTreeView
                items = { stringIdData }
                selectedItems = { selectedItem?.id ? String(selectedItem.id) : '' }
                onItemClick = {(event, itemId) => {
                    // Find the element within data
                    const item = findItem(itemId, map)
                    const itemType = String(item?.type ?? '').toLowerCase();
                    const pageLink = item?.child_items?.[0]?.page;
                    const hasExternalPage = typeof pageLink === 'string' && pageLink.trim() !== '' && pageLink !== 'LINK HERE';

                    // Open valid external links regardless of item type.
                    if (hasExternalPage) {
                        window.open(pageLink, '_blank', 'noopener,noreferrer');
                    } 
                    else if (itemType === 'none'){
                        return;
                    }
                    else {
                        setSelected(item)
                    }
                }}
                sx = {{ width: "100%"}}
                slotProps = {{
                    treeItem: {
                        headerItemIds,
                    }
                }}
                slots = {{
                    expandIcon: ()=>(<div> + </div>),
                    collapseIcon: ()=>(<div> - </div>),
                    item: SectionTreeItem
                }}
                
                />
            </div>
}