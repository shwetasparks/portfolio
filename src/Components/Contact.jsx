import React from "react";


function Contact() {
   const [result, setResult] = React.useState("");

   const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "f3c73866-6791-483e-a3ee-f740f3f3c0e1");

      const response = await fetch("https://api.web3forms.com/submit", {
         method: "POST",
         body: formData,
      });

      const data = await response.json();

      if (data.success) {
         setResult("Form Submitted Successfully");
         event.target.reset();
      } else {
         console.log("Error", data);
         setResult(data.message);
      }
   };

   return (
      <section className="py-16 lg:py-24 lg:px-8 lg:section" id="contact">
         <div className="p-5 flex justify-center items-center flex-col">
            <h1 className="text-5xl font-bold mb-8"> Let's Connect</h1>
         </div>
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
               {/* text */}
               <div className="lg:w-1/4 lg:pr-8"></div>
               {/* form */}
               <form
                  className="lg:w-1/2 border rounded-2xl p-6 lg:p-10 flex flex-col gap-y-6 items-start"
                  onSubmit={onSubmit}>
                  <input
                     type="text"
                     className="bg-transparent border-b py-3 px-4 outline-none w-full placeholder-gray-300 focus:border-accent transition-all"
                     placeholder="Your name"
                     required
                  />
                  <input
                     type="email"
                     className="bg-transparent border-b py-3 px-4 outline-none w-full placeholder-gray-300 focus:border-accent transition-all"
                     placeholder="Your Email"
                     required
                  />
                  <textarea
                     className="bg-transparent border-b py-3 px-4 outline-none w-full placeholder-gray-300 focus:border-accent transition-all resize-none mb-6"
                     placeholder="Your message"
                     required></textarea>
                  <button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-all">
                     Send Message <span>{result}</span>
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
}

export default Contact;
