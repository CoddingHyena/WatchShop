const React = require('react');
const Card = require('./Card')




module.exports = function CardList({watch}) {
  return (
   <div className='cardList' >
     <script defer src='/js/card.js'/>
    {watch.map((el) => <Card id={el.id} name={el.name} seria={el.seria} description={el.description} photo1={el.photo1} photo2={el.photo2} photo3={el.photo3} /> )}
   </div>
  );
};