import { useElement, useLayout, useEffect } from '@nebula.js/stardust';
import properties from './object-properties';
import extDefinition from './extDefinition'
import data from './data';
import { render } from './root';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllItems,selectItem, setItem, removeItem } from './states/formsSlice'

export default function supernova() {
  return {
    qae: {
      properties,
      data,
    },
    component() {
      const el = useElement();
      const layout = useLayout();
      const getData = function() {
        return layout.qHyperCube.qDataPages
      }
      useEffect(() => {
        
        const blendGlobalTheme = layout.blendGlobalTheme
        const blend = layout.blend
        const formItems = layout.items
        const refs = layout.items.map(i => i.ref)
        const requiredItems = layout.items.filter(i => i.required).map(i=>i.ref)
        const dialog = {
            show: layout.blendDialog.show,
            width: layout.blendDialog.width,
            title: layout.blendDialog.title,
            buttonLabel: layout.blend.buttonLabel,
            runningBlendLabel: blend.runningBlendLabel,
            id: blend.id
          }
        
        render(el, formItems, blendGlobalTheme, blend, refs, getData, requiredItems, dialog);
      }, [layout]);
    },
  };
}
