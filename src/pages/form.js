import React from 'react';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 15) {
    errors.title = 'Must be 15 characters or less';
  }

  if (!values.Author) {
    errors.Author = 'Required';
  } else if (values.Author.length > 20) {
    errors.Author = 'Must be 20 characters or less';
  }
  if (!values.ISBN) {
    errors.ISBN = 'Required';
  } else if (!values.ISBN < 0) {
    errors.ISBN = 'Must be positive';
  } else if (values.ISBN.length > 10) {
    errors.ISBN = 'Must be 10 characters or less';
  }

  if (!values.Publisher) {
    errors.Publisher = 'Required';
  } else if (values.Publisher.length > 20) {
    errors.Publisher = 'Must be 20 characters or less';
  }
  if (!values.soldCopies) {
    errors.soldCopies = 'Required';
  } else if (!values.soldCopies < 0) {
    errors.soldCopies = 'Must be positive';
  } else if (values.soldCopies.length > 10) {
    errors.soldCopies = 'Must be 10 characters or less';
  }

  if (!values.publishedDate) {
    errors.publishedDate = 'Required';
  } else if (values) {
    errors.publishedDate = 'Must be 20 characters or less';
  }

  if (!values.format) {
    errors.format = 'Required';
  } else if (values.format.length > 20) {
    errors.format = 'Must be 20 characters or less';
  }
  if (!values.pageCount) {
    errors.pageCount = 'Required';
  } else if (values.pageCount.length > 20) {
    errors.pageCount = 'Must be 20 characters or less';
  }
  if (!values.price) {
    errors.price = 'Required';
  } else if (values.price.length > 5) {
    errors.price = 'Must be 5 characters or less';
  }

  if (!values.summery) {
    errors.summery = 'Required';
  } else if (values.summery.length > 100) {
    errors.summery = 'Must be 100 characters or less';
  }
  if (!values.bookCover) {
    errors.bookCover = 'Required';
  } else if (values.bookCover.length > 20) {
    errors.bookCover = 'Must be 20 characters or less';
  }

  if (!values.language) {
    errors.language = 'Required';
  } else if (values.language.length > 10) {
    errors.language = 'Must be 10 characters or less';
  }
  if (!values.ratingsAverage) {
    errors.ratingsAverage = 'Required';
  } else if (values.ratingsAverage.length > 3) {
    errors.ratingsAverage = 'Must be 3 characters or less';
  }
  if (!values.ratingsQuantity) {
    errors.ratingsQuantity = 'Required';
  } else if (values.ratingsQuantity.length > 3) {
    errors.ratingsQuantity = 'Must be 3 characters or less';
  }
  if (!values.genre) {
    errors.genre = 'Required';
  } else if (values.genre.length > 10) {
    errors.genre = 'Must be 10 characters or less';
  }

  return errors;
};

export const SignupForm = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      title: '',
      Author: '',
      ISBN: '',
      publisher: '',
      soldCopies: '',
      publishedDate: '',
      format: '',
      pageCount: '',
      price: '',
      summary: '',
      bookCover: '',
      language: '',
      ratingsAverage: '',
      ratingsQuantity: '',
      genre: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div
      name="books"
      className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg"
    >
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 undefined">
          title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? <div>{formik.errors.title}</div> : null}
        <br />
        <label htmlFor="Author">Author</label>
        <input
          id="Author"
          name="Author"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Author}
        />
        {formik.errors.Author ? <div>{formik.errors.Author}</div> : null}
        <br />
        <label htmlFor="ISBN">ISBN</label>
        <input
          id="ISBN"
          name="ISBN"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.ISBN}
        />
        {formik.errors.ISBN ? <div>{formik.errors.ISBN}</div> : null}
        <br />
        <label htmlFor="Publisher">Publisher</label>
        <input
          id="Publisher"
          name="Publisher"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Publisher}
        />
        {formik.errors.Publisher ? <div>{formik.errors.Publisher}</div> : null}
        <br />
        <label htmlFor="soldCopies">Sold Copies</label>
        <input
          id="soldCopies"
          name="soldCopies"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.soldCopies}
        />
        {formik.errors.soldCopies ? <div>{formik.errors.soldCopies}</div> : null}
        <br />
        <label htmlFor="publishedDate">published Date</label>
        <input
          id="publishedDate"
          name="publishedDate"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.publishedDate}
        />
        {formik.errors.publishedDate ? <div>{formik.errors.publishedDate}</div> : null}
        <br />
        <label htmlFor="format">format</label>
        <input
          id="format"
          name="format"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.format}
        />
        {formik.errors.format ? <div>{formik.errors.format}</div> : null}
        <br />
        <label htmlFor="pageCount">Page Count</label>
        <input
          id="pageCount"
          name="pageCount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.pageCount}
        />
        {formik.errors.pageCount ? <div>{formik.errors.pageCount}</div> : null}
        <br />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price ? <div>{formik.errors.price}</div> : null}
        <br />
        <label htmlFor="summery">Summery</label>
        <input
          id="summery"
          name="summery"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.summery}
        />
        {formik.errors.summery ? <div>{formik.errors.summery}</div> : null}
        <br />
        <label htmlFor="bookCover">Book cover</label>
        <input
          id="bookCover"
          name="bookCover"
          type="file"
          onChange={formik.handleChange}
          value={formik.values.bookCover}
        />
        {formik.errors.bookCover ? <div>{formik.errors.bookCover}</div> : null}
        <br />
        <label htmlFor="language">Language</label>
        <input
          id="language"
          name="language"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.language}
        />
        {formik.errors.language ? <div>{formik.errors.language}</div> : null}
        <br />
        <label htmlFor="ratingsAverage">Ratings Average</label>
        <input
          id="ratingsAverage"
          name="ratingsAverage"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.ratingsAverage}
        />
        {formik.errors.ratingsAverage ? <div>{formik.errors.ratingsAverage}</div> : null}
        <br />
        <label htmlFor="ratingsQuantity">Ratings Quantity</label>
        <input
          id="ratingsQuantity"
          name="ratingsQuantity"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.ratingsQuantity}
        />
        {formik.errors.ratingsQuantity ? <div>{formik.errors.ratingsQuantity}</div> : null}
        <br />
        <label htmlFor="genre">Genre</label>
        <input
          id="genre"
          name="genre"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.genre}
        />
        {formik.errors.genre ? <div>{formik.errors.genre}</div> : null}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
