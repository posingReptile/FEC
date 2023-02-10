import React, {useState} from 'react';
import axios from 'axios';
import CharReview from './CharReview.jsx';
import { Container, HorizontalContainer, HorizontalStarList, HorizontalImgList, StyledImgList,StyledReviewSummary, StyledReviewBody, RedAsterisk, NewReviewTopPortion, LeftAndRight, RadioDiv, StyledEmailInput, StyledSubmit } from '../styled/NewReview.styled.js';
import './RateAndReview.css';
import { FaStar } from 'react-icons/fa';


const NewReview = ({charArray, charChoice, setCharChoice, product_id, charOptions, item}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // console.log(charArray, charChoice, setCharChoice, product_id, charOptions, item)

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
    if (parseInt(target.files.length) > 5) {
      alert("you are only allowed to add 5 photos")
    } else {
      for (let file = 0; file < target.files.length; file++) {
        setImg((prev) => ([
          ...prev,
          URL.createObjectURL(target.files[file])
        ]))
      }
    }

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

  const starRatingWords = [ 'Poor','Fair','Average', 'Good', 'Great'];

  return (
    <div>
      <Container role="add-new-review">
      <h4>Write Your Review</h4>
      <h5>About the <i>{item.name}</i></h5>
      <form onSubmit={handleReviewSubmit}>
      <NewReviewTopPortion>
        <LeftAndRight>
          <label>
            <h5>Username<RedAsterisk>*</RedAsterisk></h5>
            <input name="username" placeholder="Example: jackson11!" onChange={(e) => handleTextInput(e, setUsername)} required/>
          </label><br/>
          <h5 className="privacy-auth">For privacy reasons, do not use your full name or email address</h5><br/>
          <label>
            <h5>Email<RedAsterisk>*</RedAsterisk></h5>
            <StyledEmailInput name="email" placeholder="Example: jackson11@email.com" type ="email" onChange={(e) => handleTextInput(e, setEmail)} required/>
          </label><br/>
          <h5 className="privacy-auth">For authentication reasons, you will not be emailed</h5>
        </LeftAndRight>
        <LeftAndRight>
          <label><h5>Overall Rating<RedAsterisk>*</RedAsterisk></h5>
              <HorizontalContainer>
                <HorizontalStarList>
                {stars.map((_, index) => {
                  return (
                    <li key={index}>
                      <FaStar
                      size={24}
                      color={(hovered || starRating) > index ? "#daa520" : "grey"}
                      role={`rating-${index}`}
                      onClick={() => setRating(index + 1)}
                      onMouseOver={() => setHovered(index + 1)}
                      onMouseLeave={() => setHovered(undefined)}
                      required/>
                      </li>
                  )
                })}
                </HorizontalStarList>
                {starRating > 0 ? starRatingWords[starRating - 1] : null}
            </HorizontalContainer>
          </label><br/>
            <h5>Do you recommend this product?<RedAsterisk>*</RedAsterisk></h5>
            <RadioDiv role="recommend-radio">
              {recommendOptions.map((valueObj, k) => (
                <label key={k}>
                  <input type="radio"
                  value={valueObj.value}
                  name={valueObj.name}
                  onChange={handleRecClick}
                  role={`rec-${valueObj.value}`}
                  checked={recommend.name === valueObj.value}
                  /><br/>{valueObj.value}
                </label>
              ))}
            </RadioDiv>
          </LeftAndRight>
        </NewReviewTopPortion>

          <br/>
          <h5>Characteristics<RedAsterisk>*</RedAsterisk></h5>
          <CharReview charArray={charArray}
            charOptions={charOptions}
            charChoice={charChoice}
            setCharChoice={setCharChoice}/>
          <br />
          <fieldset role="summary">
            <legend><h5>Review Summary</h5></legend>
              <StyledReviewSummary name="summary"
              role="type-summary"
              placeholder="Example: Best purchase ever!"
              maxLength="60"
              onChange={(e) => handleTextInput(e, setSummary)}></StyledReviewSummary>
          </fieldset>
          <fieldset role="review-body">
            <legend><h5>Review Body<RedAsterisk>*</RedAsterisk></h5></legend>
              <StyledReviewBody name="body"
              placeholder="Why did you like the product or not?"
              onChange={(e) => handleTextInput(e, setBody)}
              minLength="50"
              role="type-body"
              maxLength="1000" required></StyledReviewBody>
          </fieldset>
          <input type="file" id="reviewImgUpload" name="imgUpload" accept="image/png, image/jpeg" max="5" role="handle-image-upload" onChange={(e) => handleImageSelection(e.target)} multiple/>
          <fieldset role="photo-preview">
            <legend><h5>Photo Preview</h5></legend>
            <HorizontalImgList>
            {img.map((image, index) => (
            <StyledImgList key={index}>
              <img src={image} height="100" width="100" alt=""/>
            </StyledImgList>
          ))}
          </HorizontalImgList>
          </fieldset>
        <StyledSubmit type="submit" role="submit"/>
      </form>
      </Container>
    </div>
  )
}

export default NewReview;
