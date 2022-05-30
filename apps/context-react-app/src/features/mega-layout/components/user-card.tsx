import React from 'react';

type UserCardProps = {
  imageUrl: string,
  name: string,
  email: string
}

const UserCard = ({imageUrl, name, email}: UserCardProps) => {
  return (
    <>
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={imageUrl} alt="" />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium leading-none text-white">{name}</div>
        <div className="text-sm font-medium leading-none text-gray-400">{email}</div>
      </div>
    </>
  )
}

export {UserCard};
