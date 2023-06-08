import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactPage = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            (result) => {
              alert('message sent successfully...');
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

    return (
        <div className="flex justify-center w-full lg:w-[1000px] mt-32">
            <div className="w-full">
                <div className="mx-auto text-center w-full text-white mb-8 ">
                    <h2 className="text-3xl mb-4 font-bold">Let's Talk</h2>
                    <p>If you are interested in my work or have any concerns, do not hesitate to contact me</p>
                </div>
                <form className='lg:w-[70%] w-full px-4 lg:px-0 mx-auto' ref={form} onSubmit={sendEmail}>
                    <div className='flex justify-between space-x-4 mb-4'>
                        <input type='text' className="bg-darkGray w-1/2 active:bg-darkGray focus:outline-none border rounded-lg p-3 text-white" placeholder='Name' name='user_name' />
                        <input type='email' className="bg-darkGray w-1/2 focus:outline-none border rounded-lg p-3 text-white" placeholder='Email address' name='user_email' />
                    </div>
                    <div className='w-full'>
                        <textarea name='message' rows='10' className="bg-darkGray w-full focus:outline-none border rounded-lg p-3 text-white" type='text' placeholder='Message'></textarea>
                    </div>
                    <input type='submit' value='Submit' className="bg-purple-500 px-12 py-2 rounded-full mt-10 mb-16 text-white" id='input-submit' />
                </form>
            </div>
        </div>
    )
}

export default ContactPage;