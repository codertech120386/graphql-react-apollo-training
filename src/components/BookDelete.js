import React, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useHistory, useParams } from "react-router-dom";

const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      _id
    }
  }
`;
export default function BookDelete(props) {
  const { id } = useParams();
  const [deleteBook, { data }] = useMutation(DELETE_BOOK);
  const history = useHistory();

  useEffect(() => {
    deleteBook({ variables: { id } });

    console.log("data", data);
  }, []);

  if (data?.deleteBook) {
    history.push("/");
  }

  return (
    <div>
      <h2>Deleting Book ...</h2>
    </div>
  );
}
