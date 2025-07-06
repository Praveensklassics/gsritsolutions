import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPlus, FaMinus } from 'react-icons/fa';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import Footer from '../../components/Footer';

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '384px'
};

const center = {
  lat: 17.385044, // Hyderabad latitude
  lng: 78.486671  // Hyderabad longitude
};
// Map Section
const MapSection = () => {
  return (
    <div className="w-full h-96">
      <iframe
        title="Hyderabad Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4535646810453!2d78.48307201527638!3d17.385044088063073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e1c5ffed3%3A0x3bc4189933b6b57b!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

// Contact Info Section
const ContactInfo = () => {
    const contacts = [
        {
            icon: <FaMapMarkerAlt />,
            text: "32/92 Queensberry Street, North Melbourne VIC 3051, Australia."
        },
        {
            icon: <FaPhoneAlt />,
            text: "+(1) 123 456 7890"
        },
        {
            icon: <FaEnvelope />,
            text: "hi@educrat.com"
        }
    ];

    return (
        <div>
            <h3 className="text-2xl font-semibold text-gray-800">Keep in Touch With Us.</h3>
            <p className="mt-2 text-gray-500">Tempus normalis a enim semper auctor. Libero id faucibus nibh, in tincidunt eget lorem.</p>
            <div className="mt-8 space-y-6">
                {contacts.map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl">
                            {contact.icon}
                        </div>
                        <p className="text-gray-600 mt-2">{contact.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Contact Form Section
const ContactForm = () => (
  <div>
    <h3 className="text-2xl font-semibold text-gray-800">Send a Message.</h3>
    <p className="mt-2 text-gray-500">Tempus normalis a enim semper auctor. Libero id faucibus nibh, in tincidunt eget lorem.</p>
    <form className="mt-8 space-y-6">
      <div className="flex space-x-6">
        <div className="w-1/2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="w-1/2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" rows="5" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
      </div>
      <div>
        <button type="submit" className="w-full md:w-auto bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Send Message
        </button>
      </div>
    </form>
  </div>
);

// FAQ Section
const FaqSection = () => {
    const [openIndex, setOpenIndex] = React.useState(0);

    const faqs = [
        {
            question: "Do you offer discounts for students?",
            answer: "Yes! We offer special discounts for currently enrolled students. You'll need to provide a valid student ID to qualify. Please contact our support team to get your discount code."
        },
        {
            question: "Do you offer special pricing for big teams?",
            answer: "Absolutely. We provide customized enterprise plans for teams of 10 or more. Our plans include advanced analytics, dedicated support, and bulk license management. Visit our Enterprise page for more details."
        },
        {
            question: "What is the required experience of your teachers?",
            answer: "All of our instructors are industry experts with a minimum of 5 years of professional experience in their respective fields. They undergo a rigorous vetting process to ensure the highest quality of teaching."
        },
        {
            question: "What is the course refund policy?",
            answer: "We offer a 30-day money-back guarantee on all our courses. If you are not satisfied for any reason, you can request a full refund within 30 days of your purchase, no questions asked."
        },
        {
            question: "Do you offer discounts for non-profits?",
            answer: "Yes, we are proud to support non-profit organizations with special pricing. Please reach out to our sales team with your organization's details to learn more about our non-profit discounts."
        }
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions.</h2>
                    <p className="text-gray-500 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white ${openIndex === index ? 'bg-indigo-600' : 'bg-indigo-200'}`}>
                                        {openIndex === index ? <FaMinus /> : <FaPlus />}
                                    </div>
                                    <span className={`font-semibold ${openIndex === index ? 'text-indigo-600' : 'text-gray-800'}`}>
                                        {faq.question}
                                    </span>
                                </div>
                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-5 pt-2">
                                    <p className="text-gray-600 pl-12">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// Main Page Component
const ContactPage = () => {
  return (
    <div>
        <MapSection />
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
        <FaqSection />
        <Footer />
    </div>
    
  );
};

export default ContactPage;