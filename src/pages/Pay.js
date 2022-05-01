import React, { useCallback, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
import config from '../config'
import useRazorpay from "react-razorpay";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Pay() {
   let name;
   let email;
   let image;
   let catalog;

   const [CatalogList, setCatalogList] = useState();

   const Razorpay = useRazorpay();

   const saveCatalog = () => {
      let apiUrl = `${config.api.host}/add_to_cart`

      var user = window.localStorage.getItem('user');
      var pdfType = window.localStorage.getItem('pdfType');

      if (user) {
         var formData = new FormData();
         formData.append("user_id", user);
         formData.append("amount", (pdfType == '2D') ? 2999 : 4999);
         formData.append("selection", pdfType);
         formData.append("catalog_id", catalog.id);

         axios.post(apiUrl, formData, {
            crossDomain: false,
            enablePreflight: false
         }).then((response) => {
            console.log(response);
         })
      } else {
         NotificationManager.error('', 'Please login first to save catalog.');
         setTimeout(function () {
            window.location.href = '/login';
         }, 1000)
      }
   }

   const handlePdfType = (e) => {
      window.localStorage.setItem('pdfType', e.target.value);
   }

   const handlePayment = useCallback(() => {
      var user = window.localStorage.getItem('user');
      var vastu = window.localStorage.getItem('vastu');
      var furniture = window.localStorage.getItem('furniture');
      var planning = window.localStorage.getItem('planning');
      var structure = window.localStorage.getItem('structure');
      var category = window.localStorage.getItem('category');
      var designer = window.localStorage.getItem('designer');
      var pdfType = window.localStorage.getItem('pdfType');

      if (user) {
         const options: RazorpayOptions = {
            key: config.payment.Testkey,
            amount: ((pdfType == '2D') ? 2999 : 4999) * 100,
            currency: "INR",
            name: "Catalog",
            description: "Purchase Catalog",
            image: "",
            handler: (response) => {
               let apiUrl = `${config.api.host}/payment`

               var formData = new FormData();
               formData.append("user_id", user ? user : 0);
               formData.append("txn_id", response.razorpay_payment_id);
               formData.append("amount", (pdfType == '2D') ? 2999 : 4999);
               formData.append("selection", pdfType);
               formData.append("vastu", vastu);
               formData.append("furniture", furniture);
               formData.append("planning", planning);
               formData.append("structure", structure);
               formData.append("status", 'success');
               formData.append("catalog_id", catalog.id);
               formData.append("category", category);
               formData.append("designer", designer);

               axios.post(apiUrl, formData, {
                  crossDomain: false,
                  enablePreflight: false
               }).then((response) => {
                  console.log(response.data);
                  NotificationManager.success('', 'Payment Successful.');
                  setTimeout(function () {
                     window.location.href = '/';
                  }, 1000)
               })
            },
            prefill: {
               name: name,
               email: email,
            },
            theme: {
               color: "#3399cc",
            },
         };

         const rzpay = new Razorpay(options);

         rzpay.on("payment.failed", function (response) {
            console.log(response)
            NotificationManager.error('', 'Payment Failed. Please try again.');
         });

         rzpay.open();
      } else {
         NotificationManager.error('', 'Please login first to make payment.');
         setTimeout(function () {
            window.location.href = '/login';
         }, 1000)
      }
   }, [Razorpay]);

   React.useEffect(() => {
      let apiUrl = `${config.api.host}/get_catalog`
      let apiUrluser = `${config.api.host}/get_user`

      var user = window.localStorage.getItem('user');
      var size = window.localStorage.getItem('size');
      var length = window.localStorage.getItem('length');
      var breadth = window.localStorage.getItem('breadth');
      var facing = window.localStorage.getItem('facing');
      var stories = window.localStorage.getItem('stories');
      var stories_unit = window.localStorage.getItem('stories_unit');

      if (user) {
         var formData = new FormData();
         formData.append("user_id", user);

         axios.post(apiUrluser, formData, {
            crossDomain: false,
            enablePreflight: false
         }).then((response) => {
            name = response.data.data.name;
            email = response.data.data.email;
         })
      }

      if (size && stories && facing && stories_unit && length && breadth) {
         var formData = new FormData();
         formData.append("size", size);
         formData.append("length", length);
         formData.append("breadth", breadth);
         formData.append("facing", facing);
         formData.append("stories", stories);
         formData.append("stories_unit", stories_unit);

         axios.post(apiUrl, formData, {
            crossDomain: false,
            enablePreflight: false
         }).then((response) => {
            if (response.data.status == true) {
               image = response.data.image;
               catalog = response.data.data[0];
               window.localStorage.setItem('catalog', response.data.data[0]);

               let html = [];
               image.map((item, index) => {
                  let list = (<div
                     className="col-lg-4 col-md-6 col-sm-12"
                     style={{ marginBottom: '25px', position: 'relative' }}
                  >
                     <img
                        style={{ width: '100%', height: '100%' }}
                        src={config.server.host + '/writable/uploads/' + item.image}
                     />
                     <button
                        className="view"
                     >
                        View
                     </button>
                  </div>)

                  html.push(list)
               })

               setCatalogList(html)
            }
         })
      } else {
         window.history.back();
      }
   });

   return (
      <>
         <Header />
         <div
            className="container"
            style={{ marginTop: '100px', marginBottom: '75px' }}
         >
            <div className="row">
               {CatalogList}
            </div>
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px'
               }}
            >
               <div className='row'>
                  <div className='col-sm-12 text-center'>
                     <input type='radio' onClick={handlePdfType} name='type' value='2D' /> 2D &emsp;
                     <input type='radio' onClick={handlePdfType} name='type' value='3D' /> 3D
                  </div>
                  <div className='col-sm-12 text-center mt-2'>
                     <button id="submit" onClick={handlePayment}>Pay Now</button>
                     <button id="save" onClick={saveCatalog}>Save</button>
                  </div>
               </div>
            </div>
         </div>
         <NotificationContainer />
         <Footer />
      </>
   );
}