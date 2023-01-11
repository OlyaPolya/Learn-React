import { ACCEPTABLE_IMAGE_EXTENSIONS, MAX_RATE } from '../../constants';
import React, { useRef } from 'react';
import './styles.css';
import { setReview } from '../../store/slice/FormReviewSlice';
import { useDispatch, useSelector } from '../../hooks/redux';
import {
  setButtonState,
  setDescription,
  setImgSrc,
  setRate,
  setResetForm,
  setUserName,
} from '../../store/slice/FormSlice';

const DEFAULT_VALUES = {
  userNameLengthMin: 2,
  productDescriptionLengthMin: 10,
};

const getRateOptions = (maxRate: number) => (
  <>
    {Array(maxRate)
      .fill(0)
      .map((_element, index) => (
        <option key={index} value={index + 1}>
          {index + 1}
        </option>
      ))}
  </>
);

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { buttonState, description, imgSrc, rate, userName } = useSelector(
    (state) => state.formSliceReducer
  );

  const userNameRef = useRef<HTMLInputElement>(null);
  const checkUserNameRef = useRef<HTMLElement>(null);
  const checkDescriptionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const rateRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUserName = () => {
    if (userNameRef.current) {
      dispatch(setUserName(userNameRef.current.value));
    }
    dispatch(setButtonState(false));
  };

  function handleRate() {
    if (rateRef.current) {
      dispatch(setRate(rateRef.current.value));
    }
    dispatch(setButtonState(false));
  }

  function handleDescription() {
    if (descriptionRef.current) {
      dispatch(setDescription(descriptionRef.current.value));
    }
    dispatch(setButtonState(false));
  }

  function handleImage(event: React.ChangeEvent<HTMLInputElement>): void {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => dispatch(setImgSrc(reader.result as string));
      reader.readAsDataURL(selectedFile);
    }
    dispatch(setButtonState(false));
  }

  const isValidInput = ({
    ref,
    errorRef,
    value,
    defaults,
  }: {
    ref: React.RefObject<HTMLElement>;
    errorRef: React.RefObject<HTMLElement>;
    value: string;
    defaults: Record<string, number>;
  }) => {
    if (ref.current && errorRef.current) {
      if (value.length < defaults?.min) {
        ref.current.classList.add('error');
        errorRef.current.classList.add('form-error-show');
      } else {
        ref.current.classList.remove('error');
        errorRef.current.classList.remove('form-error-show');
      }
    }

    return value?.length >= defaults?.min;
  };

  function onSubmit() {
    const isUserNameValid = isValidInput({
      ref: userNameRef,
      errorRef: checkUserNameRef,
      value: userName,
      defaults: { min: DEFAULT_VALUES.userNameLengthMin },
    });
    const isDescriptionValid = isValidInput({
      ref: descriptionRef,
      errorRef: checkDescriptionRef,
      value: description,
      defaults: { min: DEFAULT_VALUES.productDescriptionLengthMin },
    });

    if (isUserNameValid && isDescriptionValid) {
      dispatch(setReview({ userName, rate, description, imgSrc }));
      dispatch(setResetForm());
      (fileInputRef.current as HTMLInputElement).value = '';
    }
  }

  return (
    <form className="form">
      <div className="form-user">
        <p className="form-user_title">Enter Your Name</p>
        <input
          type="text"
          ref={userNameRef}
          className="form-user_description"
          onChange={handleUserName}
          placeholder="Your name..."
          value={userName}
        />
      </div>
      <span className="form-error-hight" ref={checkUserNameRef}>
        Name must be more then 2 characters long
      </span>
      <div className="form-rate">
        <p className="form-rate_title">Product Rate</p>
        <select className="form-rate_select" value={rate} ref={rateRef} onChange={handleRate}>
          {getRateOptions(MAX_RATE)}
        </select>
      </div>
      <div className="form-review">
        <p className="form-review_title">Product Review</p>
        <textarea
          className="form-review_description"
          value={description}
          ref={descriptionRef}
          onChange={handleDescription}
          placeholder="Description..."
        />
      </div>
      <span className="form-error-hight" ref={checkDescriptionRef}>
        Description must be more then 10 characters long
      </span>
      <div className="form-image">
        <p className="form-image_title">Add a Photo</p>
        <input
          type="file"
          className="form-image_select"
          ref={fileInputRef}
          accept={ACCEPTABLE_IMAGE_EXTENSIONS.join(' ')}
          onChange={handleImage}
        />
        {imgSrc && (
          <img src={imgSrc} alt="product image" ref={imageRef} className="form-image_preview" />
        )}
      </div>
      <button
        type="button"
        className="form-button"
        onClick={() => onSubmit()}
        disabled={buttonState}
      >
        Add review
      </button>
    </form>
  );
};

export default Form;
