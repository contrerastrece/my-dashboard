"use client";
import Link from "next/link";
import React from "react";

const CardUser = ({ user }) => {
  return (
    <div className="flex bg-slate-500 my-3 p-2 rounded-md m-auto justify-between w-6/12">
      <div className="">
        <Link href={`./user/${user.id}`}>
          <h1 className="font-bold">
            {user.first_name} {user.last_name}
          </h1>
        </Link>
        <p>{user.email}</p>
      </div>
      <img src={user.avatar} className="rounded-full w-20" />
    </div>
  );
};

export default CardUser;
