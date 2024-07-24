import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from 'axios';
const ApiUrl= import.meta.env.VITE_Server_URL || 'http://localhost:3001';
const getCurrentUser = async () => {
  const {data} = await axios.get(`${ApiUrl}/api/user`);

//   console.log("getCurrentUser", { data });

  return data;
};

function useUserQuery() {
  const {
    isLoading: isCurrentUserLoading,
    data: currentUser,
    error: currentUserError,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: true,
    staleTime: 0,
    cacheTime: 0,
  });
  return {
    isCurrentUserLoading,
    currentUser,
    currentUserError,
  };
}

export default useUserQuery;
