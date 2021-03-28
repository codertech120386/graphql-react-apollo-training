import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";

const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $title: String) {
    updateBook(id: $id, title: $title) {
      _id
      title
      author {
        email
      }
    }
  }
`;

export default function BookEdit(props) {
  const [title, setTitle] = useState(props?.location?.state?.title);
  const { id } = useParams();
  const [updateBook, { data }] = useMutation(UPDATE_BOOK);
  const history = useHistory();

  const updateBookSubmitHandler = (e) => {
    e.preventDefault();
    updateBook({ variables: { id: id, title: title } });
  };

  if (data?.updateBook) {
    history.push("/");
  }

  return (
    <div className='container'>
      <form onSubmit={updateBookSubmitHandler}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Title</label>
          <input
            type='text'
            className='form-control'
            aria-describedby='emailHelp'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Update
        </button>
      </form>
    </div>
  );
}
