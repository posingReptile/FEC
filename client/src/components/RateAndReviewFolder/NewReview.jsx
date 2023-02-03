import React, {useState} from 'react';
import axios from 'axios';
import CharReview from './CharReview.jsx';
import { Container, HorizontalStarList, HorizontalImgList, StyledImgList,StyledReviewSummary, StyledReviewBody } from '../styled/SelectRating.styled.js';
import { FaStar } from 'react-icons/fa';


const NewReview = ({charArray, charChoice, setCharChoice, product_id, charOptions}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // overall Rating
  const [starRating, setRating] = useState(0);
  const [hovered, setHovered] = useState(undefined);
  const stars = Array(5).fill(0);

  // recommendation
  const [recommend, setRecommend] = useState({ name: '', value: ''});
  const recommendOptions = [ { value: "yes", name: "true"}, { value: "no", name: "false"}]

  // Review Summary
  const [summary, setSummary] = useState('');

  // Review Body
  const [body, setBody] = useState('');

  // image upload
  const [img, setImg] = useState([]);
  const handleImageSelection = (target) => {
    setImg((prev) => ([
      ...prev,
      URL.createObjectURL(target.files[0])
    ]))
  }

  const handleRecClick = (e) => {
    const obj = {name: e.target.value, value: e.target.name };
    setRecommend(obj);
  }

  const handleTextInput = (e, changeFunc) => {
    changeFunc(e.target.value);
  }

  const handleReviewSubmit = () => {
    axios.post('/addReview', { product_id, username, email, starRating, recommend, summary, body, charChoice, img})
      .catch(err => console.log('error in axios post add review', err));
  }


  return (
    <div>
      <Container>
      <h4>Add New Review</h4>
      <form onSubmit={handleReviewSubmit}>
      <label>
        Username
        <input name="username" placeholder="Example: jackson11!" onChange={(e) => handleTextInput(e, setUsername)} required/>
      </label><br/>
      <h5>For privacy reasons, do not use your full name or email address</h5><br/>
      <label>
        Email
        <input name="email" placeholder="Example: jackson11@email.com" type ="email" onChange={(e) => handleTextInput(e, setEmail)} required/>
      </label><br/>
      <h5>For authentication reasons, you will not be emailed</h5><br/>
      <label>Overall Rating
          <div>
            <HorizontalStarList>
            {stars.map((_, index) => {
              return (
                <li key={index}>
                  <FaStar
                  size={24}
                  color={(hovered || starRating) > index ? "orange" : "grey"}
                  onClick={() => setRating(index + 1)}
                  onMouseOver={() => setHovered(index + 1)}
                  onMouseLeave={() => setHovered(undefined)}
                  required/>
                  </li>
              )
            })}
            </HorizontalStarList>
         </div>
      </label> <br/>
        Do you recommend this product?
        {recommendOptions.map((valueObj, k) => (
          <label key={k}>{valueObj.value}
            <input type="radio"
            value={valueObj.value}
            name={valueObj.name}
            onChange={handleRecClick}
            checked={recommend.name === valueObj.value}
            />
          </label>
        ))} <br/>

          Characteristics
          <br/>
          <CharReview charArray={charArray}
          charOptions={charOptions}
          charChoice={charChoice}
          setCharChoice={setCharChoice}/>
          <br />
          <fieldset>
            <legend>Review Summary</legend>
              <StyledReviewSummary name="summary"
              placeholder="Example: Best purchase ever!"
              maxLength="60"
              onChange={(e) => handleTextInput(e, setSummary)}></StyledReviewSummary>
          </fieldset>
          <fieldset>
            <legend>Review Body</legend>
              <StyledReviewBody name="body"
              placeholder="Why did you like the product or not?"
              onChange={(e) => handleTextInput(e, setBody)}
              minLength="50"
              maxLength="1000" required></StyledReviewBody>
          </fieldset>
          <input type="file" id="reviewImgUpload" name="imgUpload" accept="image/png, image/jpeg"  onChange={(e) => handleImageSelection(e.target)} />
          <fieldset>
            <legend>Photo Preview</legend>
            <HorizontalImgList>
            {img.map((image, index) => (
            <StyledImgList key={index}>
              <img src={image} height="100" width="100" alt=""/>
            </StyledImgList>
          ))}
          </HorizontalImgList>
          </fieldset>
        <input type="submit" />
      </form>
      </Container>
    </div>
  )
}

export default NewReview;
