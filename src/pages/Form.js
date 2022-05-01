import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import config from '../config'
import Select from 'react-select'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Form() {
   const [size, setSize] = useState('')
   const [length, setLength] = useState('')
   const [breadth, setBreadth] = useState('')
   const [facing, setFacing] = useState('')
   const [stories, setStories] = useState('')
   const [storiesUnit, setStoriesUnit] = useState('')
   const [category, setCategory] = useState('')
   const [designer, setDesigner] = useState('')
   const [planning, setPlanning] = useState('')
   const [vastu, setVastu] = useState('')
   const [furniture, setFurniture] = useState(false)
   const [isCategory, setIsCategory] = useState(true)
   const [isDesigner, setIsDesigner] = useState(true)
   const [structure, setStructure] = useState('')
   const [planningHtml, setPlanningHtml] = useState();
   const [categoryHtml, setCategoryHtml] = useState();
   const [designerHtml, setDesignerHtml] = useState();
   const [structureHtml, setStructureHtml] = useState();
   const [storiesUnitHtml, setStoriesUnitHtml] = useState();
   const [furnitureBelowHtml, setFurnitureBelowHtml] = useState(false);
   const [isStoriesUnitPublished, setIsStoriesUnitPublished] = useState(false);

   const sizeOption = [
      { value: 'feet', label: 'Feet' },
      { value: 'meter', label: 'Meter' },
   ]

   const facingOption = [
      { value: 'north', label: 'North' },
      { value: 'east', label: 'East' },
      { value: 'west', label: 'West' },
      { value: 'south', label: 'South' }
   ]

   const storiesOption = [
      { value: 'G1', label: 'G+1' },
      { value: 'G2', label: 'G+2' },
      { value: 'G3', label: 'G+3' },
      { value: 'G4', label: 'G+4' },
      { value: 'G5', label: 'G+5' },
      { value: 'G6', label: 'G+6' },
      { value: 'G7', label: 'G+7' },
      { value: 'G8', label: 'G+8' },
      { value: 'G9', label: 'G+9' },
      { value: 'G10', label: 'G+10' },
   ]

   let storiesUnitOption = []

   const categoryOption = [
      { value: 'Residential', label: 'Residential' },
      { value: 'Commercial', label: 'Commercial' },
      { value: 'High Rise building', label: 'High Rise building' },
      { value: 'Interior Design', label: 'Interior Design' },
      { value: 'Row House', label: 'Row House' },
      { value: 'Hotel Design & Development', label: 'Hotel Design & Development' },
      { value: 'Hospital Design & Development', label: 'Hospital Design & Development' },
      { value: 'Farm House', label: 'Farm House' },
      { value: 'Plotting', label: 'Plotting' },
      { value: 'Bungalow Design', label: 'Bungalow Design' },
   ];

   const designerOption = [
      { value: 'Structure', label: 'Structure' },
      { value: 'Civil Working Details', label: 'Civil Working Details' },
      { value: 'Estimation Service', label: 'Estimation Service' },
      { value: 'Floor Planning', label: 'Floor Planning' },
      { value: 'Vastu Consultancy', label: 'Vastu Consultancy' },
      { value: 'Presentation Planning', label: 'Presentation Planning' },
      { value: 'Exterior Elevation', label: 'Exterior Elevation' },
      { value: '3D Perspective View', label: '3D Perspective View' },
      { value: 'Renovation & Remodeling', label: 'Renovation & Remodeling' },
      { value: 'Interior Design', label: 'Interior Design' },
      { value: 'False Ceilling', label: 'False Ceilling' },
      { value: '3D Interior Floor Plan', label: '3D Interior Floor Plan' },
      { value: 'Wardrobe Design', label: 'Wardrobe Design' },
      { value: 'Bed Design', label: 'Bed Design' },
      { value: 'Modular Kitchen', label: 'Modular Kitchen' },
      { value: 'Supervision', label: 'Supervision' },
   ];

   const planningOption = [
      { value: 'plumbing', label: 'Plumbing' },
      { value: 'electrical', label: 'Electrical' },
      { value: 'door_window', label: 'Door & Window Details' },
   ]

   const structureOption = [
      { value: 'foundation', label: 'Foundation Details' },
      { value: 'column', label: 'Column Details' },
      { value: 'tie_beam', label: 'Tie Beam Details' },
      { value: 'slab_beam', label: 'Slab Beam Details' },
      { value: 'staircase', label: 'Staircase Details' },
      { value: 'water_tank', label: 'Water Tank Details' },
      { value: 'sptice_tank', label: 'Sptice Tank Details' },
   ]

   const customStyles = {
      option: (provided, state) => ({
         ...provided,
         borderBottom: '1px dotted pink',
         color: state.isSelected ? '#ff631b' : '#002156',
         padding: 20
      })
   }

   const handleSize = (options) => {
      setSize(options)
   }

   const handleLength = (e) => {
      setLength(e.target.value)
   }

   const handleBreadth = (e) => {
      setBreadth(e.target.value)
   }

   const handleFacing = (options) => {
      setFacing(options)
   }

   const handleStories = (options) => {
      setStories(options)

      let apiUrl = `${config.api.host}/get_stories_unit`

      var formData = new FormData();
      formData.append("story", options.value);

      axios.post(apiUrl, formData, {
         crossDomain: false,
         enablePreflight: false
      }).then((response) => {
         storiesUnitOption = [];

         if (response.data.status == true) {
            for (let i = 0; i < response.data.data.length; i++) {
               storiesUnitOption.push({ value: response.data.data[i].value, label: response.data.data[i].label })
            }
         }

         updateOptions(storiesUnitOption);
      })
   }

   const handleStoriesUnit = (options) => {
      setStoriesUnit(options)
      updateOptions(storiesUnitOption, options);
   }

   const handleCategory = (options) => {
      setCategory(options)
      setIsCategory(true)
   }

   const handleDesigner = (options) => {
      setDesigner(options)
      setIsDesigner(true)
   }

   const handlePlanning = (options) => {
      setPlanning(options)
      updatePlanning(furniture, options)
   }

   const handleStructure = (options) => {
      setStructure(options)
      updateStructure(furniture, options)
   }

   const handleVastu = (e) => {
      setVastu(e.target.checked)
   }

   const handleFurniture = (e) => {
      if (e.target.checked) {
         setFurniture(true)
      } else {
         setFurniture(false)
      }
      setFurnitureBelowHtml(false);
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      if (size != '' && facing != '' && stories != '' && storiesUnit != '' && category != '' && designer != '') {
         window.localStorage.setItem('size', size.value);
         window.localStorage.setItem('length', length);
         window.localStorage.setItem('breadth', breadth);
         window.localStorage.setItem('facing', facing.value);
         window.localStorage.setItem('stories', stories.value);
         window.localStorage.setItem('stories_unit', storiesUnit.value);
         window.localStorage.setItem('category', category.value);
         window.localStorage.setItem('designer', designer.value);
         window.localStorage.setItem('vastu', vastu);
         window.localStorage.setItem('furniture', furniture);
         window.localStorage.setItem('planning', planning.value);
         window.localStorage.setItem('structure', structure.value);

         window.location.href = '/pay';
      } else {
         NotificationManager.error('', 'Please fill all required fields.');
      }
   }

   const updateOptions = (updatedOptions, selected = storiesUnit) => {
      let storiesUnitHtmls = [];
      let storiesUnitHtmlDiv = (<>
         <div className="form-input">
            <span style={{ color: '#ff631b', fontSize: '18px' }}>
               Stories Unit
            </span>
            <Select
               isClearable
               options={updatedOptions}
               placeholder={'Stories Unit'}
               value={selected}
               onChange={handleStoriesUnit}
               styles={customStyles}
            />
         </div>
      </>);
      storiesUnitHtmls.push(storiesUnitHtmlDiv);
      setStoriesUnitHtml(storiesUnitHtmls)
   }

   const updatePlanning = (furniture, selected = planning) => {

      let html = [];
      if (furniture) {
         let list = (<>
            <div className="form-input">
               <span style={{ color: '#ff631b', fontSize: '18px' }}>
                  Planning
               </span>
               <Select
                  isClearable
                  options={planningOption}
                  placeholder={'Planning'}
                  value={selected}
                  onChange={handlePlanning}
                  styles={customStyles}
               />
            </div>
         </>);

         html.push(list);

      } else {
         html.push((<></>))
      }

      setPlanningHtml(html)
   }

   const updateStructure = (furniture, selected = structure) => {
      let html = [];
      if (furniture) {
         let list = (<>
            <div className="form-input">
               <span style={{ color: '#ff631b', fontSize: '18px' }}>
                  Structure
               </span>
               <Select
                  isClearable
                  options={structureOption}
                  placeholder={'Structure'}
                  value={selected}
                  onChange={handleStructure}
                  styles={customStyles}
               />
            </div>
         </>);

         html.push(list);

      } else {
         html.push((<></>))
      }

      setStructureHtml(html)
   }

   const updateCategory = (selected = category) => {
      let html = [];
      let list = (<>
         <div className="form-input">
            <span style={{ color: '#ff631b', fontSize: '18px' }}>
               Select Category
            </span>
            <Select
               required
               isClearable
               options={categoryOption}
               placeholder={'Category'}
               value={selected}
               onChange={handleCategory}
               styles={customStyles}
            />
         </div>
      </>);

      html.push(list);
      setCategoryHtml(html)

      setIsCategory(false)
   }

   const updateDesigner = (selected = designer) => {
      let html = [];
      let list = (<>
         <div className="form-input">
            <span style={{ color: '#ff631b', fontSize: '18px' }}>
               Select Designer
            </span>
            <Select
               required
               isClearable
               options={designerOption}
               placeholder={'Designer'}
               value={selected}
               onChange={handleDesigner}
               styles={customStyles}
            />
         </div>
      </>);

      html.push(list);
      setDesignerHtml(html)

      setIsDesigner(false)
   }

   React.useEffect(() => {
      if (isCategory) {
         if (category) {
            updateCategory(category)
         } else if (window.localStorage.getItem('category')) {
            let category = window.localStorage.getItem('category');
            let selected = { value: category, label: category }

            setCategory(selected);
            updateCategory(selected)
         } else {
            updateCategory()
         }
      }
      
      if (isDesigner) {
         if (designer) {
            updateDesigner(designer)
         } else if (window.localStorage.getItem('designer')) {
            let designer = window.localStorage.getItem('designer');
            let selected = { value: designer, label: designer }

            setDesigner(selected);
            updateDesigner(selected)
         } else {
            updateDesigner()
         }
      }

      if (!furnitureBelowHtml) {
         updatePlanning(furniture);
         updateStructure(furniture);
         setFurnitureBelowHtml(true);
      }

      if (!isStoriesUnitPublished) {
         updateOptions(storiesUnitOption);
         setIsStoriesUnitPublished(true);
      }
   });

   return (
      <>
         <Header />
         <div className="form-card">
            <form onSubmit={handleSubmit}>
               <div
                  className="sqft"
                  style={{ display: 'flex', justifyContent: 'center' }}
               >
                  <div
                     style={{
                        margin: '100px 50px'
                     }}
                  >
                     {designerHtml}
                     {categoryHtml}
                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Plot Length
                        </span>
                        <br />
                        <input
                           required
                           placeholder='Plot Length'
                           className='form-control'
                           onChange={handleLength}
                           styles={customStyles}
                        />
                     </div>
                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Plot Breadth
                        </span>
                        <br />
                        <input
                           required
                           placeholder='Plot Breadth'
                           className='form-control'
                           onChange={handleBreadth}
                           styles={customStyles}
                        />
                     </div>
                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Select Size
                        </span>
                        <Select
                           required
                           isClearable
                           options={sizeOption}
                           placeholder={'Plot Size'}
                           value={size}
                           onChange={handleSize}
                           styles={customStyles}
                        />
                     </div>
                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Select Facing
                        </span>
                        <Select
                           required
                           isClearable
                           options={facingOption}
                           placeholder={'Facing'}
                           value={facing}
                           onChange={handleFacing}
                           styles={customStyles}
                        />
                     </div>
                     <div className="form-input">
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Number Of Stories
                        </span>
                        <Select
                           required
                           isClearable
                           options={storiesOption}
                           placeholder={'Stories'}
                           value={stories}
                           onChange={handleStories}
                           styles={customStyles}
                        />
                     </div>
                     {storiesUnitHtml}
                     <div className="form-input">
                        <input
                           type='checkbox'
                           onClick={handleVastu}
                        />
                        &nbsp;
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Vastu Requires
                        </span>
                     </div>
                     <div className="form-input">
                        <input
                           type='checkbox'
                           onClick={handleFurniture}
                        />
                        &nbsp;
                        <span style={{ color: '#ff631b', fontSize: '18px' }}>
                           Furniture Layout Free Services
                        </span>
                     </div>
                     {planningHtml}
                     {structureHtml}
                     <div style={{ textAlign: 'center' }}>
                        <button type="submit" id="submit-form">
                           Submit
                        </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
         <NotificationContainer />
         <Footer />
      </>
   )
}

