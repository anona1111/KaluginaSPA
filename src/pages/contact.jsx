import povar from './povar.jpg';

function Contact () {
    return(
        <div>
            <h1>Contact us!</h1>
            <img src={povar} alt=""/>
            <h5>phone: 2(324)-65</h5>
            <h5>phone: 8(999)-99-99</h5>
            <h5>email: recipe@food.com</h5>
            
        </div>
      );
}

export { Contact }