import React from "react";

type Props = {};

const index = (props: Props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen min-w-full flex justify-center items-center"
    >
      <div className="max-w-5xl border rounded-md p-5">
        <div className="py-3 border-b border-gray-50">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            required
            className="outline-none"
            placeholder="Name"
          />
        </div>

        <div className="py-3 border-b border-gray-50">
          <label htmlFor="lastName">LastName:</label>
          <input
            type="text"
            required
            className="outline-none"
            placeholder="LastName"
          />
        </div>
        <div className="py-3 border-b border-gray-50">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            className="outline-none"
            placeholder="E-mail"
          />
        </div>
        <div className="py-3 border-b border-gray-50">
          <label htmlFor="Ph">Ph:</label>
          <input
            type="number"
            minLength={10}
            maxLength={10}
            required
            className="outline-none"
            placeholder="Ph"
          />
        </div>
        <div className="py-3 border-b border-gray-50">
          <label htmlFor="password">Pass:</label>
          <input
            type="password"
            required
            className="outline-none"
            placeholder="Password"
          />
        </div>
        <input
          type="submit"
          className="bg-gray-200 px-2 py-1 rounded-sm w-full"
        />
      </div>
    </form>
  );
};

export default index;
