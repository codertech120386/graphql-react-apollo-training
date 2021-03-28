import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_BOOKS = gql`
  query getBooks {
    getBooks {
      _id
      title
      author {
        email
      }
    }
  }
`;

function Books() {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);

  useEffect(() => {
    refetch();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Author Email</th>
            <th>Edit Book</th>
            <th>Delete Book</th>
          </tr>
        </thead>
        <tbody>
          {data?.getBooks?.map((book, i) => (
            <tr key={i}>
              <td>{book.title}</td>
              <td>{book.author.email}</td>
              <Link
                to={{
                  pathname: `/books/${book._id}/edit`,
                  state: { title: book.title },
                }}
              >
                Edit
              </Link>
              <Link
                to={{
                  pathname: `/books/${book._id}/delete`,
                }}
              >
                Delete
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
