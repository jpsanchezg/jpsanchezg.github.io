import React, { Component } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import{ init } from '@emailjs/browser';
init("user_8U6FLi1UshWAFJKiQWKsW");


const SERVICE_ID = "service_2jmhj79";
const TEMPLATE_ID = "template_0lio3mq";
const USER_ID = "user_8U6FLi1UshWAFJKiQWKsW";
class Contact extends Component {



   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var message = this.props.data.contactmessage;
      }


      const handleOnSubmit = (e) => {
         e.preventDefault();
         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
               console.log(result.text);
               Swal.fire({
                  icon: 'success',
                  title: 'Message Sent Successfully'
               })
            }, (error) => {
               console.log(error.text);
               Swal.fire({
                  icon: 'error',
                  title: 'Ooops, something went wrong',
                  text: error.text,
               })
            });
         e.target.reset()
      };

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns header-col">

                  <h1><span>Get In Touch.</span></h1>

               </div>

               <div className="ten columns">

                  <p className="lead">{message}</p>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form action="" id="contactForm" name="contactForm" onSubmit={handleOnSubmit}>
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                        </div>

                        <div>
                           <button type="submit" className="submit">Submit</button>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>


               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;