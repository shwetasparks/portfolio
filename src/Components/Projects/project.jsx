import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";

function project() {
   return (
      <div id="projects">
         <div className="p-5 flex justify-center items-center flex-col">
            <h1 className="text-5xl font-bold mb-8">Featured Work</h1>
         </div>

         <div className=" m-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            {/* project div  1*/}
            <div className=" p-3 m-5 sm:w-full md:w-auto">
               <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
                  <a href="#">
                     <img
                        className="rounded-t-lg w-full"
                        src={project1}
                        alt=""
                     />
                  </a>
                  <div className="p-5">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Full Stack Edtech Platform 📚
                     </h5>
                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        🖥️ Front-end: ReactJS, Responsive, RESTful
                        <br />
                        📚 Pages: Homepage, Course List, Wishlist, Checkout,
                        Course Content, User Details, Edit Details
                        <br />
                        👨‍🏫 Instructors: Dashboard, Insights, Course Management,
                        Profile
                        <br />
                        🛠️ Tools: ReactJS, CSS, Tailwind, Redux
                        <br />
                        ⚙️ Back-end: NodeJS, ExpressJS
                        <br />
                        🎯 Payment: Razorpay <br />
                        ☁️ Content storage: Cloudinary
                        <br />
                     </p>

                     <div className="flex flex-col md:flex-row gap-2">
                        <a
                           href="https://notionstudy.netlify.app/"
                           className="flex-1">
                           <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ">
                              Live Link
                           </button>
                        </a>
                        <a
                           href="https://github.com/shwetasparks/Edtech"
                           className="flex-1">
                           <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ">
                              Github
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* project div 2 */}
            <div className="flex p-3 m-5">
               <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
                  <a href="#">
                     <img
                        className="rounded-t-lg w-full"
                        src={project2}
                        alt=""
                     />
                  </a>
                  <div className="p-5">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Chatterbox: Real-Time Chatting
                     </h5>
                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Real Time Chat Application 🌟 Tech stack: MERN +
                        Socket.io + TailwindCSS + Daisy UI
                        <br />
                        🎃 Authentication && Authorization with JWT
                        <br />
                        👾 Real-time messaging with Socket.io
                        <br />
                        🚀 Online user status (Socket.io and React Context)
                        <br />
                        👌 Global state management with Zustand
                        <br />
                        🐞 Error handling both on the server and on the client
                     </p>
                     <div className="flex flex-col md:flex-row gap-2">
                        <a
                           href="https://chat-app-1-sehq.onrender.com/"
                           className="flex-1">
                           <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ">
                              Live Link
                           </button>
                        </a>
                        <a
                           href="https://github.com/shwetasparks/chat-app"
                           className="flex-1">
                           <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ">
                              Github
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* project 3  */}
            {/* project div  1*/}
            <div className="flex p-3 m-5">
               <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
                  <a href="#">
                     <img
                        className="rounded-t-lg w-full"
                        src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                     />
                  </a>
                  <div className="p-5">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Full Stack Ecommerce app
                     </h5>
                     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        🛒 Full Stack E-commerce Web App: End-to-end
                         📊 Dashboard Integration 
                         🔐 Authentication and Authorization
                     </p>
                     <div className="flex flex-col md:flex-row gap-2">
                        <a href="#" className="flex-1">
                           <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ">
                              Live Link
                           </button>
                        </a>
                        <a
                           href="https://github.com/shwetasparks/ecomm"
                           className="flex-1">
                           <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 ">
                              Github
                           </button>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* project 2 */}
         </div>
      </div>
   );
}

export default project;
