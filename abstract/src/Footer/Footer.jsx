// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-300 text-sm">
//       <div className="container mx-auto py-8 px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//           {/* Resources Column */}
//           <div>
//             <h4 className="font-bold mb-4">Resources</h4>
//             <ul>
//               <li><a href="#">Blog</a></li>
//               <li><a href="#">Help Center</a></li>
//               <li><a href="#">Release Notes</a></li>
//               <li><a href="#">Status</a></li>
//             </ul>
//           </div>
//           {/* Community Column */}
//           <div>
//             <h4 className="font-bold mb-4">Community</h4>
//             <ul>
//               <li><a href="#">Twitter</a></li>
//               <li><a href="#">LinkedIn</a></li>
//               <li><a href="#">Facebook</a></li>
//               <li><a href="#">Dribbble</a></li>
//               <li><a href="#">Podcast</a></li>
//             </ul>
//           </div>
//           {/* Company Column */}
//           <div>
//             <h4 className="font-bold mb-4">Company</h4>
//             <ul>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Careers</a></li>
//               <li><a href="#">Legal</a></li>
//               <li><a href="#">Contact Us</a></li>
//             </ul>
//           </div>
//           {/* Start Trial Column */}
//           <div>
//             <h4 className="font-bold mb-4">Start Trial</h4>
//             <ul>
//               <li><a href="#">Start Trial</a></li>
//               <li><a href="#">Pricing</a></li>
//               <li><a href="#">Download</a></li>
//               <h4 className="font-bold mt-4">Contact Info</h4>
//             <p>info@abstract.com</p>
//             </ul>
//           </div>
//           {/* Contact Info Column */}
//           <div>
//             <p>&copy; Copyright 2023 Abstract Studio Design, Inc.</p>
//             <p>All rights reserved</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;










import React from 'react';
import Logo from './Logo.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 text-sm">
      <div className="container mx-auto pt-8 pb-16 px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Resources Column */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Release Notes</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Dribbble</a></li>
              <li><a href="#" className="hover:underline">Podcast</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4">Company</h4>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Start Trial Column */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-bold mb-4">Start Trial</h4>
            <ul>
              <li><a href="#" className="hover:underline">Start Trial</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Download</a></li>
              <h4 className="font-bold mt-4">Contact Info</h4>
              <p><a href="mailto:info@abstract.com" className="hover:underline">info@abstract.com</a></p>
            </ul>
          </div>

          {/* Logo */}
          <div className="">
            <h4 className='font-bold mb-4'>
              <a href="#" className="hover:underline">&copy; Copyright 2023</a>
            </h4>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

