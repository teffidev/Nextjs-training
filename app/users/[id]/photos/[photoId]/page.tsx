import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserPhotoPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <ul>
        <li>ID usuario: {id}</li>
        <li>ID foto: {photoId}</li>
      </ul>
    </div>
  );
};

export default UserPhotoPage;
