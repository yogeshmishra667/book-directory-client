import React from 'react';

import { useGetUsersQuery } from '../../features/apiSlice';
import AdminUserCard from './../../components/AdminUserCard';
import Spinner from '../../pages/spinner';
const AdminUser = () => {
  let user;
  const { data, isFetching, isSuccess, isError } = useGetUsersQuery();
  if (isFetching) {
    user = <Spinner />;
  } else if (isSuccess) {
    user = data.data.user.map((user) => {
      return <AdminUserCard user={user} />;
    });
  }
  return <div className="row">{user}</div>;
};

export default AdminUser;
