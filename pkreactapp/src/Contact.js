// import styled from "styled-components";

// const Contact = () => {

//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;
//     text-align: center;

//     .container {
//       margin-top: 6rem;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid ${({ theme }) => theme.colors.btn};
//               color: ${({ theme }) => theme.colors.btn};
//               transform: scale(0.9);
//             }
//           }
//         }
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <h2 className="common-heading"> Contact Page</h2>

//       <iframe
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54506.07304514324!2d75.38135102236015!3d31.369199943332134!
//       2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a4f847628ff97%3A0xbc7e316b12fb1d2f!2schapati%20Shakes%20King!5e0!3m2!1sen!2s
//       in!4v1668780855863!5m2!1sen!2sin"
//        width="100%" 
//        height="450" 
//        style= {{border: 0}}
//        allowFullScreen="" 
//        loading="lazy" 
//        referrerPolicy="no-referrer-when-downgrade">
//       </iframe>

//      <div className="container">
//       <div className="contact-form">
//         <form action="https://formspree.io/f/maykknpa" method="POST" className="contact-inputs">
//           <input 
//           type="text" 
//           placeholder="username"
//           name= "username"
//           required
//           autoComplete="off"
          
//            />

//            <input type="email" 
//            name="Email" 
//            placeholder="Email" 
//            autoComplete="off"
//            reuired
//            autocomplete="off"
           
//            />

//            <textarea name="Massages" id="" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your Massage"></textarea>

//            <input type="Submit" value="send"/>
//         </form>
//       </div>
//      </div>

//     </Wrapper>
//   );
// };

// export default Contact;
