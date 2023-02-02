import React, {useState} from 'react';
import { Container, HorizontalList } from '../styled/SelectRating.styled.js';
import { FaStar } from 'react-icons/fa';


const NewReview = (/*props*/) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // overall Rating
  const [starRating, setRating] = useState(0);
  const [hovered, setHovered] = useState(undefined);
  // recommendation
  const [recommend, setRecommend] = useState({ name: '', value: ''});

  const handleRecClick = (e) => {
    const obj = {name: e.target.value, value: e.target.name };
    setRecommend(obj);
  }

  const recommendOptions = [ { value: "yes", name: "true"}, { value: "no", name: "false"}]


  const stars = Array(5).fill(0);

  return (
    <div>
      <Container>
      <h4>Add New Review</h4>
      <form>
      <label>
        Username
        <input name="username" value={username} onChange={setUsername} required/>
      </label><br/>
      <label>
        Email
        <input name="email" type ="email" value={email} onChange={setEmail} required/>
      </label><br/>
      <label>Overall Rating
          <div>
            <HorizontalList>
            {stars.map((_, index) => {
              return (
                <li key={index}>
                  <FaStar
                  size={24}
                  color={(hovered || starRating) > index ? "orange" : "grey"}
                  onClick={() => setRating(index + 1)}
                  onMouseOver={() => setHovered(index + 1)}
                  onMouseLeave={() => setHovered(undefined)}
                  />
                  </li>
              )
            })}
            </HorizontalList>
         </div>
      </label> <br/>
        Do you recommend this product?
        {recommendOptions.map((valueObj, k) => (
          <label key={k}><input type="radio" value={valueObj.value} name={valueObj.name} onChange={handleRecClick} checked={recommend.name === valueObj.value}/>{valueObj.value}</label>
        ))} <br/>
      </form>
      </Container>
    </div>
  )
}

export default NewReview;

// let createArrayWithNumbers = (max) => {
//   return Array.from({max}, (_, i) => i + 1);
// }
// const stars = createArrayWithNumbers(5);

// const fillingStars = (i) => {
//   // console.log('inside of filling stars')
//   if (i < starRating) {
//     return 100
//   } else {
//     return 0;
//   }
// }

// const clickRatingHelper = (e) => {
//   setRating(e.target.key + 1)
// }