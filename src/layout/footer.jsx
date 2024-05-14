function Footer() {
   return (
      <footer className="page-footer #e53935 red darken-1">
         <div className="footer-copyright">
            <div className="container">
               by  © {new Date().getFullYear()}
               <a className="grey-text text-lighten-4 right" href="">
                  Repository
               </a>
            </div>
         </div>
      </footer>
   );
}
export {Footer};
